'use client';

import { motion } from 'framer-motion';
import { Settings, Bell, Shield, Key, Users, Save } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Settings
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Manage your workspace preferences
          </p>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 gap-6">
        {/* General Settings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-[#0D0F2B] rounded-lg border border-gray-200 dark:border-gray-800"
        >
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
              <Settings className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              General Settings
            </h2>
            <div className="mt-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    Workspace Name
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Change your workspace display name
                  </p>
                </div>
                <input
                  type="text"
                  className="block w-64 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0A0B1C] px-4 py-2 text-gray-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 sm:text-sm"
                  placeholder="My Workspace"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    Email Notifications
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Receive email updates about your workspace
                  </p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 dark:bg-gray-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  role="switch"
                  aria-checked="true"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-5"
                  />
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Security Settings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-[#0D0F2B] rounded-lg border border-gray-200 dark:border-gray-800"
        >
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
              <Shield className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              Security
            </h2>
            <div className="mt-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    Two-Factor Authentication
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Key className="h-4 w-4" />
                  Enable 2FA
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Team Settings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-[#0D0F2B] rounded-lg border border-gray-200 dark:border-gray-800"
        >
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              Team
            </h2>
            <div className="mt-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    Team Members
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Manage your team members and their access
                  </p>
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-[#0D0F2B] border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Manage Team
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Save className="h-4 w-4" />
          Save Changes
        </button>
      </div>
    </div>
  );
} 