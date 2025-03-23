import React, { useState } from 'react'
import SidebarAssistant from '../../../../components/common/dashboardComponent/assistant/sidebar.assistant'
// import UsageAssistant from '../../../../components/common/dashboardComponent/assistant/usage.assistant'
import AlertError from '../../../../components/common/base/Alert/alertError'
import Charts from '../../../../components/common/dashboardComponent/assistant/chart.assistant'

const DashboardAssistant: React.FC = () => {
  const [error, setError] = useState<string | null>(null)

  // Simulate an error for demonstration
  const simulateError = () => {
    setError('An error occurred while loading the usage data.')
    setTimeout(() => setError(null), 5000) // Clear error after 5 seconds
  }

  return (
    <>
      <SidebarAssistant title={'Dashboard'} />
      <div className="w-full lg:ps-64">
        <div className="sm:p-6 space-y-4 sm:spa ce-y-6">
          {error && (
            <div className="fixed top-4 right-4 z-50">
              <AlertError message={error} onClose={() => setError(null)} description={''} />
            </div>
          )}
          {/* <UsageAssistant /> */}
          <Charts /> 
          <button onClick={simulateError} className="mt-4 py-2 px-4 bg-red-600 text-white rounded">Simulate Error</button>
        </div>
      </div>
    </>
  )
}

export default DashboardAssistant
