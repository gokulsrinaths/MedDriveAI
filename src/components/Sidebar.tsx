'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  FolderClosed,
  Files,
  GitCommit,
  Settings,
  Info,
} from 'lucide-react'
import Logo from './Logo'

const navigation = [
  {
    name: 'Dashboard',
    href: '/workspace',
    icon: LayoutDashboard,
    match: /^\/workspace$/,
  },
  {
    name: 'Projects',
    href: '/workspace/projects',
    icon: FolderClosed,
    match: /^\/workspace\/projects(?!.*\/files)/,
  },
  {
    name: 'Files',
    href: '/workspace/files',
    icon: Files,
    match: /\/workspace\/(files|annotate)/,
  },
  {
    name: 'Commits',
    href: '/workspace/commits',
    icon: GitCommit,
    match: /^\/workspace\/commits/,
  },
  {
    name: 'Settings',
    href: '/workspace/settings',
    icon: Settings,
    match: /^\/workspace\/settings/,
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col border-r border-gray-200 bg-gray-50">
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 px-4">
        <Link href="/workspace">
          <Logo />
        </Link>
      </div>

      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const isActive = item.match.test(pathname)
          const Icon = item.icon

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                isActive
                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon
                className={`mr-3 h-5 w-5 flex-shrink-0 ${
                  isActive ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-700'
                }`}
              />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="shrink-0 border-t border-gray-200 p-4">
        <div className="flex items-center px-2 py-2 text-sm text-gray-600">
          <Info className="mr-2 h-4 w-4" />
          Demo Version
        </div>
      </div>
    </div>
  )
} 