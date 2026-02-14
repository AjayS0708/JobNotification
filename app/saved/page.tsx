import Card from '@/components/Card'

export default function SavedPage() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-40">
      <div className="space-y-16">
        <h1 className="font-serif text-heading-lg text-primary">
          Saved Jobs
        </h1>
        <p className="font-sans text-body-base text-[#666666]">
          Jobs you've marked for later review.
        </p>
      </div>

      <Card padding="lg">
        <div className="min-h-[400px] flex items-center justify-center">
          <div className="text-center space-y-16 max-w-[500px]">
            <div className="w-64 h-64 mx-auto mb-24 border-2 border-border flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-[#999999]"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h2 className="font-serif text-heading-md text-primary">
              No saved jobs yet
            </h2>
            <p className="font-sans text-body-base text-[#666666]">
              When you save a job from your dashboard, it will appear here.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
