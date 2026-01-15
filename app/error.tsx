'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#40dacf]">
      <div className="text-center px-6 max-w-lg">
        <h2 className="text-3xl font-semibold text-slate-900 mb-4">
          Er is iets misgegaan
        </h2>
        <p className="text-slate-600 mb-8">
          Sorry, er is een fout opgetreden. Probeer het opnieuw of ga terug naar de homepage.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            onClick={reset}
            variant="default"
            size="lg"
          >
            Probeer opnieuw
          </Button>
          <Button
            onClick={() => window.location.href = '/'}
            variant="outline"
            size="lg"
          >
            Naar home
          </Button>
        </div>
      </div>
    </div>
  )
}
