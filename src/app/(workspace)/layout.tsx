'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FolderClosed, Files, GitCommit, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Overview', href: '/workspace', icon: LayoutDashboard },
  { name: 'Projects', href: '/workspace/projects', icon: FolderClosed },
  { name: 'Files', href: '/workspace/files', icon: Files },
  { name: 'Commits', href: '/workspace/commits', icon: GitCommit },
  { name: 'Settings', href: '/workspace/settings', icon: Settings },
];

const sidebarVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-[#0A0B1C]">
      {/* Sidebar */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={sidebarVariants}
        className="flex h-full w-64 flex-col border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0D0F2B]"
      >
        <motion.nav 
          className="flex-1 space-y-1 p-4"
        >
          {navigation.map((item) => {
            const isActive = item.href === '/workspace' 
              ? pathname === '/workspace' 
              : pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <motion.div
                key={item.name}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={item.href}
                  className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800/50'
                  }`}
                >
                  <Icon
                    className={`mr-3 h-5 w-5 flex-shrink-0 transition-colors duration-200 ${
                      isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300'
                    }`}
                  />
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>

        <motion.div 
          variants={itemVariants}
          className="shrink-0 border-t border-gray-200 dark:border-gray-800 p-4"
        >
          <div className="flex items-center px-2 py-2 text-sm text-gray-600 dark:text-gray-400">
            Demo Version
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1 overflow-y-auto bg-gray-50 dark:bg-[#0A0B1C]"
      >
        {children}
      </motion.main>
    </div>
  );
} 