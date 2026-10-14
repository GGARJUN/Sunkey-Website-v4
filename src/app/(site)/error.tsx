'use client'

/**
 * Error boundary — catches runtime errors within (site) pages
 * without crashing the Navbar or Footer.
 * Must be a Client Component.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center gap-5 px-5 text-center">
      <h2 className="text-white font-bold text-xl tracking-tight">
        Something went wrong.
      </h2>
      <p className="text-white/40 text-sm max-w-[320px]">
        {error.message ?? 'An unexpected error occurred. Please try again.'}
      </p>
      <button onClick={() => reset()} className="btn-primary">
        Try again
      </button>
    </div>
  )
}
