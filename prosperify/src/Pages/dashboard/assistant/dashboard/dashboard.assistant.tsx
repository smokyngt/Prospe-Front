import React, { useState } from 'react'
import SidebarAssistant from '../../../../components/common/dashboardComponent/assistant/sidebar.assistant'
// import UsageAssistant from '../../../../components/common/dashboardComponent/assistant/usage.assistant'
import Charts from '../../../../components/common/dashboardComponent/assistant/chart.assistant'
import DashboardLayout from '@/components/common/layouts/DashboardLayout'

const DashboardAssistant: React.FC = () => {
  const [error, setError] = useState<string | null>(null)

  // Simulate an error for demonstration
  const simulateError = () => {
    setError('An error occurred while loading the usage data.')
    setTimeout(() => setError(null), 5000) // Clear error after 5 seconds
  }

  return (
    <DashboardLayout
      sidebar={<SidebarAssistant title={'Dashboard'} />}
      paddingClassName="sm:p-6 space-y-4"
      error={error}
      onCloseError={() => setError(null)}
    >
      {/* <UsageAssistant /> */}
      <Charts />
      <button onClick={simulateError} className="mt-4 py-2 px-4 bg-red-600 text-white rounded">Simulate Error</button>
    </DashboardLayout>
  )
}

export default DashboardAssistant
