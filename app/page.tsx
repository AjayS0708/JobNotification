import Link from 'next/link'
import Button from '@/components/Button'

export default function Home() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center space-y-40 max-w-[900px]">
        <h1 className="font-serif text-heading-xl text-primary">
          Stop Missing The Right Jobs.
        </h1>
        <p className="font-sans text-body-lg text-primary max-w-text mx-auto">
          Precision-matched job discovery delivered daily at 9AM.
        </p>
        <div className="pt-24">
          <Link href="/settings">
            <Button variant="primary">Start Tracking</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
