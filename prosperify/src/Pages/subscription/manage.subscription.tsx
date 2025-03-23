import React, { useState } from 'react'
import AlertError from '../../components/common/base/Alert/alertError'

const ManageSubscription: React.FC = () => {
  const [error, setError] = useState<string | null>(null)
  // Simulate an error for demonstration
  const simulateError = () => {
    setError('An error occurred while managing your subscription.')
    setTimeout(() => setError(null), 5000) // Clear error after 5 seconds
  }
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
      {error && (
        <div className="fixed top-4 right-4 z-50">
          <AlertError message={error} onClose={() => setError(null)} description={''} />
        </div>
      )}
      <div className="max-w-xl px-5 text-center">
        <div className="flex justify-center items-center mb-2">
          <h2 className="text-[42px] font-bold text-zinc-800">
            Manage Subscription
          </h2>
        </div>
        <p className="mb-4 text-lg text-custom-gray-dark">
          Manage your subscription details, update your payment information, and view your subscription history. Keep your subscription details up to date to ensure uninterrupted service.
        </p>
        <a
          href="/subscription/manage"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Manage Subscription
        </a>
        {/* Simulate error button for demonstration */}
        <button onClick={simulateError} className="mt-4 py-2 px-4 bg-red-600 text-white rounded">Simulate Error</button>
      </div>
    </div>
  )
}
export default ManageSubscription