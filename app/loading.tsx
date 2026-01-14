import { Spinner } from '@/components/ui/spinner'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 via-amber-50 to-amber-100">
      <div className="text-center">
        <Spinner className="w-12 h-12 mx-auto mb-4" />
        <p className="text-slate-600">Laden...</p>
      </div>
    </div>
  )
}
