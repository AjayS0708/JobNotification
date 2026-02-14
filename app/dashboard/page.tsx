'use client'

import { useState, useEffect, useMemo } from 'react'
import { jobs, Job } from '@/data/jobs'
import JobCard from '@/components/JobCard'
import JobModal from '@/components/JobModal'
import Card from '@/components/Card'
import Input from '@/components/Input'

export default function DashboardPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [savedJobs, setSavedJobs] = useState<string[]>([])
  const [keyword, setKeyword] = useState('')
  const [location, setLocation] = useState('all')
  const [mode, setMode] = useState('all')
  const [experience, setExperience] = useState('all')
  const [source, setSource] = useState('all')
  const [sortBy, setSortBy] = useState('latest')

  // Load saved jobs from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('savedJobs')
    if (saved) {
      setSavedJobs(JSON.parse(saved))
    }
  }, [])

  const handleSaveJob = (jobId: string) => {
    const newSavedJobs = savedJobs.includes(jobId)
      ? savedJobs.filter(id => id !== jobId)
      : [...savedJobs, jobId]
    
    setSavedJobs(newSavedJobs)
    localStorage.setItem('savedJobs', JSON.stringify(newSavedJobs))
  }

  // Get unique values for filters
  const locations = useMemo(() => {
    const uniqueLocations = Array.from(new Set(jobs.map(j => j.location)))
    return ['all', ...uniqueLocations.sort()]
  }, [])

  // Filter and sort jobs
  const filteredJobs = useMemo(() => {
    let filtered = jobs

    // Keyword search
    if (keyword) {
      const lowerKeyword = keyword.toLowerCase()
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(lowerKeyword) ||
        job.company.toLowerCase().includes(lowerKeyword)
      )
    }

    // Location filter
    if (location !== 'all') {
      filtered = filtered.filter(job => job.location === location)
    }

    // Mode filter
    if (mode !== 'all') {
      filtered = filtered.filter(job => job.mode === mode)
    }

    // Experience filter
    if (experience !== 'all') {
      filtered = filtered.filter(job => job.experience === experience)
    }

    // Source filter
    if (source !== 'all') {
      filtered = filtered.filter(job => job.source === source)
    }

    // Sort
    if (sortBy === 'latest') {
      filtered = [...filtered].sort((a, b) => a.postedDaysAgo - b.postedDaysAgo)
    }

    return filtered
  }, [keyword, location, mode, experience, source, sortBy])

  return (
    <div className="max-w-[1400px] mx-auto space-y-40">
      <div className="space-y-16">
        <h1 className="font-serif text-heading-lg text-primary">
          Dashboard
        </h1>
        <p className="font-sans text-body-base text-[#666666]">
          {filteredJobs.length} jobs found
        </p>
      </div>

      {/* Filters */}
      <Card padding="lg">
        <div className="space-y-24">
          <Input
            placeholder="Search by title or company..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            fullWidth
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-16 py-16 border-2 border-border bg-surface-light font-sans text-body-base text-primary transition-standard focus:border-primary focus:outline-none"
            >
              {locations.map(loc => (
                <option key={loc} value={loc}>
                  {loc === 'all' ? 'All Locations' : loc}
                </option>
              ))}
            </select>

            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="px-16 py-16 border-2 border-border bg-surface-light font-sans text-body-base text-primary transition-standard focus:border-primary focus:outline-none"
            >
              <option value="all">All Modes</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Onsite">Onsite</option>
            </select>

            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="px-16 py-16 border-2 border-border bg-surface-light font-sans text-body-base text-primary transition-standard focus:border-primary focus:outline-none"
            >
              <option value="all">All Experience</option>
              <option value="Fresher">Fresher</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
            </select>

            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="px-16 py-16 border-2 border-border bg-surface-light font-sans text-body-base text-primary transition-standard focus:border-primary focus:outline-none"
            >
              <option value="all">All Sources</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Naukri">Naukri</option>
              <option value="Indeed">Indeed</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-16 py-16 border-2 border-border bg-surface-light font-sans text-body-base text-primary transition-standard focus:border-primary focus:outline-none"
            >
              <option value="latest">Latest First</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Jobs Grid */}
      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
          {filteredJobs.map(job => (
            <JobCard
              key={job.id}
              job={job}
              onView={() => setSelectedJob(job)}
              onSave={() => handleSaveJob(job.id)}
              isSaved={savedJobs.includes(job.id)}
            />
          ))}
        </div>
      ) : (
        <Card padding="lg">
          <div className="min-h-[300px] flex items-center justify-center">
            <div className="text-center space-y-16">
              <p className="font-sans text-body-lg text-[#666666]">
                No jobs match your filters. Try adjusting your search criteria.
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Job Modal */}
      <JobModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
        onSave={() => selectedJob && handleSaveJob(selectedJob.id)}
        isSaved={selectedJob ? savedJobs.includes(selectedJob.id) : false}
      />
    </div>
  )
}
