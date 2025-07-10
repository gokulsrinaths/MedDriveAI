'use client';

import { motion } from 'framer-motion';
import { FileText, Users, Brain, Activity, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { label: 'Active Projects', value: '12', icon: FileText, trend: '+2 this week' },
  { label: 'Team Members', value: '24', icon: Users, trend: '+3 new' },
  { label: 'Files Analyzed', value: '1.2K', icon: Activity, trend: '+123 today' },
  { label: 'AI Insights', value: '856', icon: Brain, trend: '+89 new' },
];

const recentProjects = [
  {
    name: 'COVID-19 Research Analysis',
    files: 234,
    members: 12,
    progress: 75,
  },
  {
    name: 'Cancer Treatment Study',
    files: 156,
    members: 8,
    progress: 45,
  },
  {
    name: 'Neural Pathway Mapping',
    files: 89,
    members: 6,
    progress: 90,
  },
];

const recentActivity = [
  {
    action: 'File Upload',
    description: 'MRI scan dataset uploaded to Cancer Treatment Study',
    time: '2 minutes ago',
  },
  {
    action: 'Analysis Complete',
    description: 'AI analysis completed for Neural Pathway dataset',
    time: '15 minutes ago',
  },
  {
    action: 'New Comment',
    description: 'Dr. Smith commented on COVID-19 Research Analysis',
    time: '1 hour ago',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function DashboardPage() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="p-6 space-y-8"
    >
      {/* Welcome Section */}
      <motion.div 
        variants={fadeInUp}
        className="flex items-center justify-between"
      >
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Welcome back
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-1 text-sm text-gray-500 dark:text-gray-400"
          >
            Here's what's happening with your research projects
          </motion.p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/workspace/projects/new" 
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
          >
            New Project
            <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      {stat.label}
                    </dt>
                    <dd>
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="text-lg font-semibold text-gray-900 dark:text-white"
                      >
                        {stat.value}
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                        className="mt-1 text-sm text-green-600 dark:text-green-400"
                      >
                        {stat.trend}
                      </motion.div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Projects and Activity */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Recent Projects */}
        <motion.div
          variants={fadeInUp}
          className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">Recent Projects</h2>
              <motion.div whileHover={{ x: 4 }}>
                <Link 
                  href="/workspace/projects" 
                  className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors duration-200"
                >
                  View all
                </Link>
              </motion.div>
            </div>
            <div className="mt-6 flow-root">
              <ul className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
                {recentProjects.map((project, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="py-4"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          {project.name}
                        </p>
                        <div className="mt-2 flex items-center space-x-4">
                          <div className="flex items-center">
                            <FileText className="h-4 w-4 text-gray-400" />
                            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                              {project.files} files
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 text-gray-400" />
                            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                              {project.members} members
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-24 rounded-full bg-gray-200 dark:bg-gray-700">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${project.progress}%` }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-2 rounded-full bg-indigo-600"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {project.progress}%
                        </span>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          variants={fadeInUp}
          className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
              <motion.div whileHover={{ x: 4 }}>
                <Link 
                  href="/workspace/activity" 
                  className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors duration-200"
                >
                  View all
                </Link>
              </motion.div>
            </div>
            <div className="mt-6 flow-root">
              <ul className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
                {recentActivity.map((activity, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="py-4"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {activity.action}
                        </p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          {activity.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {activity.time}
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 