import React from 'react'
import SidebarOrga from '../../../components/common/dashboardComponent/Organization/sidebar.orga'
import GridAssistantOrga from './createAssistant.orga'

const Assistant:React.FC = () => {
  return (
        <>
        <SidebarOrga title="Assistant" />
        <div className="p-4 bg-white ml-64">
        <div className="p-4 rounded-lg w-full">
        <GridAssistantOrga />
        </div>
        </div>
        </>
  )
}

export default Assistant
