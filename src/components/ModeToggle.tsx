'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Beaker, User } from 'lucide-react'

export default function ModeToggle() {
  const [isResearcherMode, setIsResearcherMode] = useState(true)
  const router = useRouter()

  const handleModeChange = () => {
    setIsResearcherMode(!isResearcherMode)
    // In a real app, this would update the global state and refetch data
    // For demo, we'll just show a mode switch animation
    router.refresh()
  }

  return (
    <div className="flex items-center gap-3 rounded-lg bg-gray-100 p-2">
      <button
        onClick={handleModeChange}
        className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
          isResearcherMode
            ? 'bg-white text-blue-600 shadow-sm'
            : 'text-gray-600 hover:bg-gray-200'
        }`}
      >
        <Beaker className="h-4 w-4" />
        Researcher
      </button>
      <button
        onClick={handleModeChange}
        className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
          !isResearcherMode
            ? 'bg-white text-blue-600 shadow-sm'
            : 'text-gray-600 hover:bg-gray-200'
        }`}
      >
        <User className="h-4 w-4" />
        Personal
      </button>
    </div>
  )
} 