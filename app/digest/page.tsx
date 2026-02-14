"use client"

import { useEffect, useMemo, useState } from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { jobs, Job } from '@/data/jobs'
import {
  calculateMatchScore,
  getMatchScoreBadgeStyle,
  getPreferencesFromStorage,
  JobPreferences,
} from '@/utils/matchScore'

type DigestItem = {
  id: string
  matchScore: number
}

type DigestPayload = {
  dateKey: string
  items: DigestItem[]
}

const getTodayKey = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const getReadableDate = () => {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function DigestPage() {
  const [preferences, setPreferences] = useState<JobPreferences | null>(null)
  const [digest, setDigest] = useState<DigestPayload | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const todayKey = useMemo(() => getTodayKey(), [])
  const digestStorageKey = `jobTrackerDigest_${todayKey}`

  useEffect(() => {
    const prefs = getPreferencesFromStorage()
    setPreferences(prefs)

    const stored = localStorage.getItem(digestStorageKey)
    if (stored) {
      try {
        setDigest(JSON.parse(stored))
      } catch {
        setDigest(null)
      }
    }
  }, [digestStorageKey])

  const jobLookup = useMemo(() => {
    return new Map(jobs.map(job => [job.id, job]))
  }, [])

  const digestJobs = useMemo(() => {
    if (!digest) return []
    return digest.items
      .map(item => {
        const job = jobLookup.get(item.id)
        if (!job) return null
        return { ...job, matchScore: item.matchScore }
      })
      .filter((job): job is Job & { matchScore: number } => job !== null)
  }, [digest, jobLookup])

  const handleGenerateDigest = () => {
    if (!preferences) return
    setIsGenerating(true)

    const existing = localStorage.getItem(digestStorageKey)
    if (existing) {
      try {
        setDigest(JSON.parse(existing))
        setIsGenerating(false)
        return
      } catch {
        // fall through to regenerate
      }
    }

    const scored = jobs
      .map(job => ({
        ...job,
        matchScore: calculateMatchScore(job, preferences),
      }))
      .filter(job => job.matchScore > 0)
      .sort((a, b) => {
        if (b.matchScore !== a.matchScore) return b.matchScore - a.matchScore
        return a.postedDaysAgo - b.postedDaysAgo
      })
      .slice(0, 10)

    const payload: DigestPayload = {
      dateKey: todayKey,
      items: scored.map(job => ({ id: job.id, matchScore: job.matchScore })),
    }

    localStorage.setItem(digestStorageKey, JSON.stringify(payload))
    setDigest(payload)
    setIsGenerating(false)
  }

  const formatDigestText = () => {
    const lines: string[] = []
    lines.push('Top 10 Jobs For You — 9AM Digest')
    lines.push(`Date: ${getReadableDate()}`)
    lines.push('')

    if (digestJobs.length === 0) {
      lines.push('No matching roles today. Check again tomorrow.')
    } else {
      digestJobs.forEach((job, index) => {
        lines.push(
          `${index + 1}. ${job.title} — ${job.company} | ${job.location} | ${job.experience} | ${job.matchScore}% Match | ${job.applyUrl}`
        )
      })
    }

    lines.push('')
    lines.push('This digest was generated based on your preferences.')
    return lines.join('\n')
  }

  const handleCopyDigest = async () => {
    const text = formatDigestText()
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const handleCreateEmailDraft = () => {
    const subject = 'My 9AM Job Digest'
    const body = formatDigestText()
    const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  const showNoMatches = digest && digestJobs.length === 0

  return (
    <div className="max-w-[1200px] mx-auto space-y-32">
      <div className="space-y-12">
        <h1 className="font-serif text-heading-lg text-primary">
          Daily Digest
        </h1>
        <p className="font-sans text-body-base text-[#666666]">
          Your personalized job summary, delivered daily at 9AM.
        </p>
      </div>

      <Card padding="lg" className="bg-[#FAFAFA] border-[#E5E7EB]">
        <div className="flex flex-wrap items-center justify-between gap-16">
          <div className="space-y-6">
            <p className="font-sans text-sm text-[#6B7280]">
              Demo Mode: Daily 9AM trigger simulated manually.
            </p>
          </div>
          <div className="flex flex-wrap gap-12">
            <Button
              variant="primary"
              onClick={handleGenerateDigest}
              disabled={!preferences || isGenerating}
            >
              {isGenerating ? 'Generating...' : "Generate Today's 9AM Digest (Simulated)"}
            </Button>
            <div className="flex flex-col items-center">
              {copied && (
                <div className="mb-4 text-green-600 flex items-center gap-2 text-sm font-semibold">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 10 18 4 12" /></svg>
                  Copied!
                </div>
              )}
              <Button
                variant="secondary"
                onClick={handleCopyDigest}
                disabled={!digest}
              >
                Copy Digest to Clipboard
              </Button>
            </div>
            <Button
              variant="secondary"
              onClick={handleCreateEmailDraft}
              disabled={!digest}
            >
              Create Email Draft
            </Button>
          </div>
        </div>
      </Card>

      {!preferences && (
        <Card padding="lg" className="bg-white">
          <div className="min-h-[200px] flex items-center justify-center">
            <div className="text-center space-y-12">
              <h2 className="font-serif text-heading-md text-primary">
                Set preferences to generate a personalized digest.
              </h2>
              <p className="font-sans text-body-base text-[#666666]">
                Update your preferences to unlock the daily 9AM digest.
              </p>
            </div>
          </div>
        </Card>
      )}

      {preferences && digest && (
        <Card padding="lg" className="bg-[#FDFDFD]">
          <div className="border border-[#E5E7EB] rounded-lg overflow-hidden bg-white">
            <div className="px-32 py-24 border-b border-[#E5E7EB]">
              <h2 className="font-serif text-heading-md text-primary">
                Top 10 Jobs For You — 9AM Digest
              </h2>
              <p className="font-sans text-sm text-[#6B7280] mt-6">
                {getReadableDate()}
              </p>
            </div>

            {showNoMatches ? (
              <div className="px-32 py-32 text-center">
                <p className="font-sans text-body-base text-[#666666]">
                  No matching roles today. Check again tomorrow.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-[#E5E7EB]">
                {digestJobs.map(job => (
                  <div key={job.id} className="px-32 py-24 flex items-center justify-between gap-20">
                    <div className="space-y-6">
                      <div className="flex items-center gap-12">
                        <h3 className="font-serif text-heading-sm text-primary">
                          {job.title}
                        </h3>
                        <span
                          className="px-12 py-6 font-sans text-xs font-bold rounded-md"
                          style={getMatchScoreBadgeStyle(job.matchScore)}
                        >
                          {job.matchScore}% Match
                        </span>
                      </div>
                      <p className="font-sans text-body-base text-[#111111] font-medium">
                        {job.company}
                      </p>
                      <div className="font-sans text-sm text-[#6B7280]">
                        {job.location} • {job.experience}
                      </div>
                    </div>
                    <Button
                      variant="primary"
                      onClick={() => window.open(job.applyUrl, '_blank')}
                      className="px-24 py-12 text-sm"
                    >
                      Apply
                    </Button>
                  </div>
                ))}
              </div>
            )}

            <div className="px-32 py-20 border-t border-[#E5E7EB]">
              <p className="font-sans text-sm text-[#6B7280]">
                This digest was generated based on your preferences.
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
