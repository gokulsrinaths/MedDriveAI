'use client'

import { useState } from 'react'
import { X, Plus, UserPlus } from 'lucide-react'
import type { Project } from '@/types/project'

interface CollaboratorDialogProps {
  project: Project
  isOpen: boolean
  onClose: () => void
  onUpdate: () => void
}

export default function CollaboratorDialog({
  project,
  isOpen,
  onClose,
  onUpdate,
}: CollaboratorDialogProps) {
  const [newEmail, setNewEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [collaborators, setCollaborators] = useState<string[]>(project.collaborators)

  if (!isOpen) return null

  const handleAddCollaborator = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!newEmail.trim()) return

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(newEmail)) {
      setError('Please enter a valid email address')
      return
    }

    // Check if email is already a collaborator
    if (collaborators.includes(newEmail)) {
      setError('This email is already a collaborator')
      return
    }

    // Add new collaborator
    setCollaborators(prev => [...prev, newEmail])
    setNewEmail('')
    onUpdate()
  }

  const handleRemoveCollaborator = async (email: string) => {
    setCollaborators(prev => prev.filter(e => e !== email))
    onUpdate()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium">Project Collaborators</h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleAddCollaborator} className="mb-6">
          <div className="flex space-x-2">
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Enter collaborator's email"
              className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="flex items-center space-x-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              <span>Add</span>
            </button>
          </div>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </form>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <UserPlus className="h-4 w-4" />
            <span>Collaborators</span>
          </div>
          {collaborators.length === 0 ? (
            <p className="text-sm text-gray-500">No collaborators yet</p>
          ) : (
            <ul className="divide-y divide-gray-100 rounded-md border border-gray-200">
              {collaborators.map((email) => (
                <li
                  key={email}
                  className="flex items-center justify-between p-3"
                >
                  <span className="text-sm">{email}</span>
                  <button
                    onClick={() => handleRemoveCollaborator(email)}
                    className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-6 rounded-lg bg-gray-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <UserPlus className="h-5 w-5 text-blue-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-800">Demo Mode</h3>
              <p className="mt-2 text-sm text-gray-500">
                This is a demo version. Collaborator changes will be stored temporarily in your browser and will be lost on refresh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 