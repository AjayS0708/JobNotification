'use client'

import { useState } from 'react'
import Card from '@/components/Card'
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import Button from '@/components/Button'

export default function SettingsPage() {
  const [roleKeywords, setRoleKeywords] = useState('')
  const [locations, setLocations] = useState('')
  const [mode, setMode] = useState('')
  const [experience, setExperience] = useState('')

  return (
    <div className="max-w-[800px] mx-auto space-y-40">
      <div className="space-y-16">
        <h1 className="font-serif text-heading-lg text-primary">
          Job Preferences
        </h1>
        <p className="font-sans text-body-base text-[#666666]">
          Configure your job search criteria. Logic will be implemented in the next step.
        </p>
      </div>

      <Card padding="lg">
        <div className="space-y-40">
          <div className="space-y-24">
            <Input
              label="Role Keywords"
              placeholder="e.g., Senior Frontend Engineer, React Developer"
              value={roleKeywords}
              onChange={(e) => setRoleKeywords(e.target.value)}
              fullWidth
            />

            <Input
              label="Preferred Locations"
              placeholder="e.g., San Francisco, Remote, New York"
              value={locations}
              onChange={(e) => setLocations(e.target.value)}
              fullWidth
            />

            <div className="space-y-8">
              <label className="font-sans font-medium text-primary block">
                Work Mode
              </label>
              <div className="flex gap-16">
                <label className="flex items-center gap-8 cursor-pointer">
                  <input
                    type="radio"
                    name="mode"
                    value="remote"
                    checked={mode === 'remote'}
                    onChange={(e) => setMode(e.target.value)}
                    className="w-16 h-16 text-accent"
                  />
                  <span className="font-sans text-body-base">Remote</span>
                </label>
                <label className="flex items-center gap-8 cursor-pointer">
                  <input
                    type="radio"
                    name="mode"
                    value="hybrid"
                    checked={mode === 'hybrid'}
                    onChange={(e) => setMode(e.target.value)}
                    className="w-16 h-16 text-accent"
                  />
                  <span className="font-sans text-body-base">Hybrid</span>
                </label>
                <label className="flex items-center gap-8 cursor-pointer">
                  <input
                    type="radio"
                    name="mode"
                    value="onsite"
                    checked={mode === 'onsite'}
                    onChange={(e) => setMode(e.target.value)}
                    className="w-16 h-16 text-accent"
                  />
                  <span className="font-sans text-body-base">Onsite</span>
                </label>
              </div>
            </div>

            <div className="space-y-8">
              <label className="font-sans font-medium text-primary block">
                Experience Level
              </label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full px-16 py-16 border-2 border-border bg-surface-light font-sans text-body-base text-primary transition-standard focus:border-primary focus:outline-none"
              >
                <option value="">Select experience level</option>
                <option value="entry">Entry Level (0-2 years)</option>
                <option value="mid">Mid Level (3-5 years)</option>
                <option value="senior">Senior (6-10 years)</option>
                <option value="lead">Lead/Principal (10+ years)</option>
              </select>
            </div>
          </div>

          <div className="pt-24 border-t border-border">
            <Button variant="primary" fullWidth>
              Save Preferences
            </Button>
          </div>
        </div>
      </Card>

      <Card padding="md" className="bg-[#FFFBF5] border-warning">
        <p className="font-sans text-sm text-primary">
          <strong className="font-semibold">Note:</strong> Preferences are not saved yet. Logic will be implemented in the next step.
        </p>
      </Card>
    </div>
  )
}
