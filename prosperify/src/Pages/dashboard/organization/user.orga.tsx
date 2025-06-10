import React from 'react'
import TableUsers from '../../../components/common/dashboardComponent/Organization/tableUser.orga'

const UserPage:React.FC = () => {
  return (
        <>
        <div className="p-4 bg-white ">
        <div className="p-4 rounded-lg w-full">
        <TableUsers />
        </div>
        </div>

        </>
  )
}

export default UserPage
