import React, { useState } from 'react'
import AlertError from '@/components/common/base/Alert/alertError'

const initialApiKeys = [
  {
    name: 'Client Read-Only',
    user: 'Alice Johnson',
    status: 'Active',
    created: '28 Dec, 12:12'
  },
  {
    name: 'Internal Tooling',
    user: 'Bob Smith',
    status: 'Warning',
    created: '20 Dec, 09:27'
  },
  {
    name: 'Test Key',
    user: 'Charlie Brown',
    status: 'Danger',
    created: '18 Dec, 15:20'
  }
]

const TableApiKeys: React.FC = () => {
  const [apiKeys, setApiKeys] = useState(initialApiKeys)
  const [currentPage] = useState(1)
  const apiKeysPerPage = 20
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const indexOfLast = currentPage * apiKeysPerPage
  const indexOfFirst = indexOfLast - apiKeysPerPage
  const filtered = apiKeys.filter(key => key.name.toLowerCase().includes(searchTerm.toLowerCase()))
  const current = filtered.slice(indexOfFirst, indexOfLast)

  return (
    <> 
    <div className="p-4 bg-white ">
  <div className="p-4 rounded-lg w-full">
      <div className="bg-white w-full">
        <h2 className="text-base font-semibold mb-2 font-sans">API Keys</h2>
        <p className="text-sm text-gray-600 mb-4">Manage all API keys issued in your workspace.</p>
      </div>
      {error && (
        <div className="fixed top-4 right-4 z-50">
          <AlertError message={error} onClose={() => setError(null)} description={''} />
        </div>
      )}
      <div className="overflow-x-auto w-full">
        <div className="min-w-full inline-block align-middle w-10/12 max-w-4xl">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden w-11/12 mx-auto">
            <div className="px-6 py-4 flex justify-between items-center border-b border-gray-200">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                onClick={() => setApiKeys([...apiKeys, { name: 'New Key', user: 'New User', status: 'Active', created: new Date().toLocaleDateString() }])}></button>
              <div className="relative max-w-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400 dark:text-white/60" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search by key name"
                  className="py-2 pl-10 pr-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-8 py-3 text-left">Key Name</th>
                  <th className="px-8 py-3 text-left">User</th>
                  <th className="px-8 py-3 text-left">Status</th>
                  <th className="px-8 py-3 text-left">Created</th>
                  <th className="px-8 py-3 text-end">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {current.map((key, index) => (
                  <tr key={index} className="cursor-pointer">
                    <td className="px-8 py-3">{key.name}</td>
                    <td className="px-8 py-3">{key.user}</td>
                    <td className="px-8 py-3">
                      <span className={`py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-full ${
                        key.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : key.status === 'Warning'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {key.status}
                      </span>
                    </td>
                    <td className="px-8 py-3">{key.created}</td>
                    <td className="px-8 py-3 text-right">
                      <button className="text-sm text-red-600 hover:underline">Revoke</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-6 py-4 flex justify-between items-center border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">{filtered.length}</span> API keys found
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
</div>
    </> 
  )
}

export default TableApiKeys
