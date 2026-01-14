import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Pagina niet gevonden',
  description: 'De pagina die je zoekt bestaat niet.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 via-amber-50 to-amber-100">
      <div className="text-center px-6">
        <h1 className="text-8xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-slate-800 mb-4">
          Pagina niet gevonden
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
          Sorry, de pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <Link
          href="/"
          className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
        >
          Terug naar home
        </Link>
      </div>
    </div>
  )
}
