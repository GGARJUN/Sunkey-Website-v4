/**
 * Suspense fallback — shown while a page segment resolves.
 * Keeps the Navbar and Footer visible during loading.
 */
export default function Loading() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <div
        className="w-7 h-7 border-2 border-brand-orange border-t-transparent rounded-full animate-spin"
        role="status"
        aria-label="Loading"
      />
    </div>
  )
}
