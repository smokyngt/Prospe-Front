import React from 'react'

interface SidebarProps {
  title: string;
}   

const SidebarAssistant: React.FC<SidebarProps> = ({ title }) => {
  const currentPath = window.location.pathname

  const linkClasses = (path: string) =>
    `flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-semibold rounded-lg ${
      currentPath === path
        ? 'bg-[#f1f5f9] dark:bg-neutral- 600 text-gray-800 dark:text-white'
        : 'text-neutral-700 dark:text-white hover:bg-[#f1f5f9] dark:hover:bg-neutral-700'
    }`

  return (
    <>
      <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-neutral-800 border-b border-gray-100">
        <nav className="flex basis-full items-center w-full mx-auto px-4 sm:px-6" aria-label="Global">
          <div className="w-full flex items-center justify-between sm:gap-x-3 sm:order-3">
            <div className="text-xl font-semibold text-gray-800 dark:text-white">
            {title}
            </div>
            <div className="flex items-center justify-end gap-2">
              <div className="relative inline-flex">
                <button
                  id="profile-button"
                  type="button"
                  className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                >
                  <img
                    className="inline-block w-9 h-9 rounded-full ring-2 ring-white dark:ring-neutral-800"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Profile"
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div id="application-sidebar" className="fixed inset-y-0 start-0 z-[60] w-[260px] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 dark:bg-neutral-800 dark:border-neutral-700">
        <div className="px-8 pt-4">
          <a
            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href="/"
          >
            Prosperify
          </a>
        </div>

        <div className="h-full overflow-y-auto">
          <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap text-sm font-sans leading-6" data-hs-accordion-always-open>
            <ul className="space-y-1.5">
              <li>
                <a className={linkClasses('/assistant/:id/')} href="/assistant/:id/">
                  <svg className="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a className={linkClasses('/assistant/:id/sources/')} href="/assistant/:id/sources/">
                  <svg className="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Sources
                </a>
              </li>
              <li>
                <a className={linkClasses('/assistant/:id/settings')} href="/assistant/:id/settings">
                  <svg className="flex-shrink-0 w-5 h-5 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4-1"/><path d="m16.8 12.3-.4-1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>
                  Settings
                </a>
              </li>
              <li>
  <a
    className={`${linkClasses('/assistant/:id/playground')} text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`}
    href="/assistant/:id/Playground"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
      className="flex-shrink-0 w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
      />
    </svg>
    <span className="text-sm font-semibold text-white">Chat</span>
  </a>
</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default SidebarAssistant
