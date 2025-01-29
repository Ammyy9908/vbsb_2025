import React from 'react'

function TabNavigation({ activeTab, onTabChange }) {
  const tabs = [
    'Taxation and Compliances',
    'Audit And Assurances',
    'Project Finance',
    'Project Setu - Incollaboration with Ideafirst Consulting',
  ]

  return (
    <div className="w-full overflow-x-auto">
      <nav className="border-b border-gray-200">
        <ul className="flex gap-8 whitespace-nowrap">
          {tabs.map((tab) => (
            <li key={tab}>
              <button
                onClick={() => onTabChange(tab)}
                className={`
                  relative py-4 text-sm font-medium transition-colors
                  ${activeTab === tab 
                    ? 'text-purple-800' 
                    : 'text-gray-500 hover:text-gray-700'
                  }
                `}
              >
                {tab}
                {/* Active Tab Indicator */}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-800"></span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default TabNavigation 