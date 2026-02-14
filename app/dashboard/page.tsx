import Card from '@/components/Card'

export default function DashboardPage() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-40">
      <div className="space-y-16">
        <h1 className="font-serif text-heading-lg text-primary">
          Dashboard
        </h1>
        <p className="font-sans text-body-base text-[#666666]">
          Your daily job matches will appear here.
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
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18" />
                <path d="M15 3v18" />
                <path d="M3 9h18" />
                <path d="M3 15h18" />
              </svg>
            </div>
            <h2 className="font-serif text-heading-md text-primary">
              No jobs yet
            </h2>
            <p className="font-sans text-body-base text-[#666666]">
              In the next step, you will load a realistic dataset.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
