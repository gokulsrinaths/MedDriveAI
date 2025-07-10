'use client';

import { motion } from 'framer-motion';
import { 
  Activity, 
  Users, 
  FileText, 
  Brain, 
  Upload, 
  MessageSquare, 
  Share2, 
  Edit2,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const stats = [
  { 
    name: 'Active Projects', 
    value: '12', 
    icon: Activity,
    trend: '+2 this week',
    color: 'text-emerald-500'
  },
  { 
    name: 'Team Members', 
    value: '24', 
    icon: Users,
    trend: '+3 new',
    color: 'text-blue-500'
  },
  { 
    name: 'Files Analyzed', 
    value: '1,234', 
    icon: FileText,
    trend: '+89 today',
    color: 'text-purple-500'
  },
  { 
    name: 'AI Models', 
    value: '8', 
    icon: Brain,
    trend: '+2 new',
    color: 'text-indigo-500'
  },
];

const recentActivity = [
  {
    id: '1',
    type: 'file_upload',
    icon: Upload,
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    content: {
      title: 'MRI Analysis Dataset',
      project: 'Neurological Research',
      user: 'Dr. Sarah Chen',
      size: '156 MB'
    },
    timestamp: '2 minutes ago'
  },
  {
    id: '2',
    type: 'comment',
    icon: MessageSquare,
    iconColor: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    content: {
      user: 'Dr. Michael Lee',
      file: 'Patient Demographics Report',
      project: 'COVID-19 Research',
      comment: 'The age distribution analysis shows significant patterns in recovery rates.'
    },
    timestamp: '15 minutes ago'
  },
  {
    id: '3',
    type: 'share',
    icon: Share2,
    iconColor: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    content: {
      user: 'Dr. Emily Brown',
      project: 'Cardiology Study',
      sharedWith: 'Research Team B',
      fileCount: 5
    },
    timestamp: '45 minutes ago'
  },
  {
    id: '4',
    type: 'analysis',
    icon: Brain,
    iconColor: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    content: {
      title: 'AI Analysis Complete',
      project: 'Cancer Treatment Study',
      findings: 'Identified 3 significant patterns in treatment responses',
      accuracy: '94.5%'
    },
    timestamp: '1 hour ago'
  },
  {
    id: '5',
    type: 'edit',
    icon: Edit2,
    iconColor: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    content: {
      user: 'Dr. James Wilson',
      file: 'Treatment Protocol v2.1',
      project: 'Immunotherapy Research',
      changes: 'Updated methodology section with new findings'
    },
    timestamp: '2 hours ago'
  }
];

export default function WorkspaceOverview() {
    return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">
            Workspace Overview
          </h1>
          <p className="text-gray-400">
            Welcome to your research workspace
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
          <motion.div
              key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              className="relative overflow-hidden rounded-lg bg-[#0D0F2B] p-5"
          >
              <dt>
                <div className={`absolute rounded-lg ${stat.color}/10 p-3`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-400">
                  {stat.name}
                </p>
                    </dt>
              <dd className="ml-16 flex items-baseline">
                <p className="text-2xl font-semibold text-white">
                        {stat.value}
                </p>
                <p className="ml-2 flex items-baseline text-sm font-semibold text-green-400">
                        {stat.trend}
                </p>
                    </dd>
          </motion.div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="rounded-lg bg-[#0D0F2B] p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
              <Link 
            href="/workspace/activity" 
            className="text-sm text-blue-500 hover:text-blue-400 flex items-center gap-1"
              >
                View all
            <ArrowRight className="h-4 w-4" />
              </Link>
        </div>

        <div className="space-y-4">
          {recentActivity.map((activity) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-[#1C1E33] hover:bg-[#252942] transition-colors"
              >
                <div className={`${activity.bgColor} p-2 rounded-lg`}>
                  <Icon className={`h-5 w-5 ${activity.iconColor}`} />
            </div>

                <div className="flex-1 min-w-0">
                  {activity.type === 'file_upload' && (
                    <>
                      <p className="text-white">
                        <span className="font-medium">{activity.content.user}</span>
                        {' '}uploaded{' '}
                        <span className="font-medium">{activity.content.title}</span>
                        {' '}({activity.content.size})
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        to {activity.content.project}
                      </p>
                    </>
                  )}

                  {activity.type === 'comment' && (
                    <>
                      <p className="text-white">
                        <span className="font-medium">{activity.content.user}</span>
                        {' '}commented on{' '}
                        <span className="font-medium">{activity.content.file}</span>
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        "{activity.content.comment}"
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        in {activity.content.project}
                      </p>
                    </>
                  )}

                  {activity.type === 'share' && (
                    <>
                      <p className="text-white">
                        <span className="font-medium">{activity.content.user}</span>
                        {' '}shared {activity.content.fileCount} files with{' '}
                        <span className="font-medium">{activity.content.sharedWith}</span>
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        from {activity.content.project}
                      </p>
                    </>
                  )}

                  {activity.type === 'analysis' && (
                    <>
                      <p className="text-white">
                        <span className="font-medium">{activity.content.title}</span>
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        {activity.content.findings} with {activity.content.accuracy} confidence
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        in {activity.content.project}
                      </p>
                    </>
                  )}

                  {activity.type === 'edit' && (
                    <>
                      <p className="text-white">
                        <span className="font-medium">{activity.content.user}</span>
                        {' '}edited{' '}
                        <span className="font-medium">{activity.content.file}</span>
                        </p>
                      <p className="text-sm text-gray-400 mt-1">
                        {activity.content.changes}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        in {activity.content.project}
                      </p>
                    </>
                  )}

                  <p className="text-xs text-gray-500 mt-2">
                    {activity.timestamp}
                        </p>
              </div>

                <Link 
                  href={`/workspace/${activity.type === 'file_upload' ? 'files' : 
                    activity.type === 'comment' ? 'files' :
                    activity.type === 'share' ? 'projects' :
                    activity.type === 'analysis' ? 'projects' :
                    'files'}`}
                  className="shrink-0 text-gray-400 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 