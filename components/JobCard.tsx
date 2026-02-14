'use client'

import { Job } from '@/data/jobs'
import Button from './Button'
import Badge from './Badge'
import { getMatchScoreBadgeStyle } from '@/utils/matchScore'

interface JobCardProps {
  job: Job
  matchScore?: number
  showMatchScore?: boolean
  onView: () => void
  onSave: () => void
  isSaved: boolean
}

export default function JobCard({ job, matchScore = 0, showMatchScore = false, onView, onSave, isSaved }: JobCardProps) {
  const handleApply = () => {
    window.open(job.applyUrl, '_blank')
  }

  const getSourceColor = (source: string) => {
    switch (source) {
      case 'LinkedIn': return 'bg-[#0A66C2] text-white'
      case 'Naukri': return 'bg-[#4A90E2] text-white'
      case 'Indeed': return 'bg-[#2164F3] text-white'
      default: return 'bg-primary text-white'
    }
  }

  const getDaysAgoText = (days: number) => {
    if (days === 0) return 'Today'
    if (days === 1) return 'Yesterday'
    return `${days} days ago`
  }

  return (
    <div className="border border-[#E5E7EB] bg-white p-24 transition-all duration-200 hover:border-accent hover:shadow-md rounded-lg">
      <div className="space-y-16">
        {/* Header */}
        <div className="flex items-start justify-between gap-16">
          <div className="flex-1 space-y-8">
            <h3 className="font-serif text-heading-sm text-primary">
              {job.title}
            </h3>
            <p className="font-sans text-body-base font-medium text-primary">
              {job.company}
            </p>
          </div>
          <div className="flex flex-col gap-8 items-end">
            <span 
              className={`px-16 py-8 font-sans text-sm font-medium rounded-md ${getSourceColor(job.source)}`}
              style={{ borderRadius: '6px' }}
            >
              {job.source}
            </span>
            {showMatchScore && (
              <span 
                className="px-16 py-8 font-sans text-sm font-bold rounded-md shadow-sm"
                style={{
                  ...getMatchScoreBadgeStyle(matchScore),
                  borderRadius: '6px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}
              >
                {matchScore}% Match
              </span>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="space-y-8">
          <div className="flex items-center gap-8 font-sans text-body-base text-[#666666]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{job.location} • {job.mode}</span>
          </div>
          <div className="flex items-center gap-8 font-sans text-body-base text-[#666666]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            <span>{job.experience} years</span>
          </div>
          <div className="font-sans text-[15px] text-[#374151] font-semibold">
            {job.salaryRange}
          </div>
        </div>

        {/* Posted */}
        <div className="pt-8 border-t border-border">
          <p className="font-sans text-sm text-[#999999]">
            Posted {getDaysAgoText(job.postedDaysAgo)}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-8 pt-8">
          <Button variant="secondary" onClick={onView} className="flex-1 text-sm py-12">
            View
          </Button>
          <Button 
            variant="secondary" 
            onClick={onSave} 
            className={`flex-1 text-sm py-12 ${isSaved ? 'bg-accent text-white border-accent' : ''}`}
          >
            {isSaved ? 'Saved' : 'Save'}
          </Button>
          <Button variant="primary" onClick={handleApply} className="flex-1 text-sm py-12">
            Apply
          </Button>
        </div>
      </div>
    </div>
  )
}
