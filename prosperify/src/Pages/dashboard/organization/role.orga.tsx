import React from 'react'
import RoleManagementTable from '../../../components/common/dashboardComponent/Organization/roleManagementTable.orga'

const Role:React.FC = () => {
  return (
        <>
        <div className="p-4 bg-white ">
        <div className="p-4 rounded-lg w-full">
        <RoleManagementTable />
        </div>
        </div>
        </>
  )
}

export default Role
