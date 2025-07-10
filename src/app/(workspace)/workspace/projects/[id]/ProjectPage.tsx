'use client';

import { useState } from 'react';
import {
  Brain,
  Beaker,
  FileText,
  Users,
  Calendar,
  Clock,
  ChevronRight,
  ChevronLeft,
  Plus,
  Settings,
  Download,
  Share2,
  TrendingUp,
  Activity,
  AlertCircle,
  BarChart3,
  LineChart,
  PieChart,
  ArrowUpRight,
  MessageSquare,
  GitBranch,
  Star,
  Microscope,
} from 'lucide-react';
import Link from 'next/link';

// Shared mock data - matches with projects/page.tsx
const PROJECTS_DATA = [
  {
    id: 'proj-123',
    name: 'Advanced Neural Network for Cancer Detection',
    description: 'Developing a state-of-the-art deep learning model for early-stage cancer detection using multi-modal medical imaging data.',
    status: 'active',
    progress: 78,
    startDate: '2024-01-15',
    lastUpdated: '2024-03-20',
    lead: {
      name: 'Dr. Sarah Chen',
      avatar: '👩‍⚕️',
      role: 'Lead AI Researcher',
      publications: 47,
      citations: 1890
    },
    team: {
      size: 24,
      active: 18,
      departments: ['AI Research', 'Clinical', 'Data Science', 'Medical Imaging']
    },
    metrics: {
      accuracy: 97.8,
      sensitivity: 95.6,
      specificity: 96.2,
      f1Score: 96.7
    },
    resources: {
      computeHours: 15420,
      dataProcessed: '45.8TB',
      modelsDeployed: 8,
      activeExperiments: 12
    },
    timeline: {
      milestones: 14,
      completed: 9,
      nextMilestone: 'Phase 3 Clinical Validation',
      daysToNextMilestone: 12
    },
    files: [
      {
        id: 'f1',
        name: 'CNN Architecture Diagram.pdf',
        type: 'documentation',
        size: '2.4MB',
        lastModified: '2 hours ago',
        author: 'Dr. Michael Lee',
        status: 'reviewed',
        icon: Brain,
        color: 'text-purple-500',
        bgColor: 'bg-purple-500/10'
      },
      {
        id: 'f2',
        name: 'Training Dataset v2.h5',
        type: 'dataset',
        size: '1.2GB',
        lastModified: '4 hours ago',
        author: 'Dr. Emily Brown',
        status: 'processing',
        icon: LineChart,
        color: 'text-blue-500',
        bgColor: 'bg-blue-500/10'
      },
      {
        id: 'f3',
        name: 'Clinical Trial Results.xlsx',
        type: 'results',
        size: '8.7MB',
        lastModified: '6 hours ago',
        author: 'Dr. James Wilson',
        status: 'validated',
        icon: Beaker,
        color: 'text-green-500',
        bgColor: 'bg-green-500/10'
      },
      {
        id: 'f4',
        name: 'Model Performance Analysis.ipynb',
        type: 'analysis',
        size: '1.8MB',
        lastModified: '1 day ago',
        author: 'Dr. Lisa Martinez',
        status: 'updated',
        icon: BarChart3,
        color: 'text-orange-500',
        bgColor: 'bg-orange-500/10'
      }
    ],
    recentActivity: [
      {
        id: 'a1',
        type: 'milestone',
        title: 'Achieved 97.8% Accuracy',
        description: 'Model performance breakthrough in tumor detection',
        timestamp: '2 hours ago',
        icon: TrendingUp,
        color: 'text-green-500'
      },
      {
        id: 'a2',
        type: 'collaboration',
        title: 'New Research Partnership',
        description: 'Stanford Medical joins the research initiative',
        timestamp: '1 day ago',
        icon: Share2,
        color: 'text-blue-500'
      },
      {
        id: 'a3',
        type: 'publication',
        title: 'Research Paper Accepted',
        description: 'Nature Medicine approved our latest findings',
        timestamp: '2 days ago',
        icon: FileText,
        color: 'text-purple-500'
      }
    ]
  },
  // Additional projects data...
];

export default function ProjectPage({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Find the current project from shared data
  const project = PROJECTS_DATA.find(p => p.id === id);

  if (!project) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-semibold text-white">Project Not Found</h1>
        <p className="text-gray-400 mt-2">The requested project could not be found.</p>
        <Link 
          href="/workspace/projects"
          className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Return to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Back Button and Project Header */}
      <div className="space-y-6">
        <Link
          href="/workspace/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ChevronLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
        
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold text-white">{project.name}</h1>
              <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-500 rounded-full">
                Active
              </span>
            </div>
            <p className="mt-2 text-gray-400 max-w-3xl">{project.description}</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1C1E33] text-white rounded-lg hover:bg-[#252942] transition-colors">
              <Share2 className="h-4 w-4" />
              Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <GitBranch className="h-4 w-4" />
              Create Branch
            </button>
          </div>
        </div>
      </div>

      {/* Project Stats Grid */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-[#0D0F2B] p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="text-gray-400">Accuracy</div>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </div>
          <div className="mt-2 text-2xl font-semibold text-white">{project.metrics.accuracy}%</div>
          <div className="mt-1 text-sm text-green-500">+2.3% this week</div>
        </div>
        <div className="bg-[#0D0F2B] p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="text-gray-400">Team Members</div>
            <Users className="h-4 w-4 text-blue-500" />
          </div>
          <div className="mt-2 text-2xl font-semibold text-white">{project.team.size}</div>
          <div className="mt-1 text-sm text-blue-500">{project.team.active} active now</div>
        </div>
        <div className="bg-[#0D0F2B] p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="text-gray-400">Compute Hours</div>
            <Brain className="h-4 w-4 text-purple-500" />
          </div>
          <div className="mt-2 text-2xl font-semibold text-white">{project.resources.computeHours}</div>
          <div className="mt-1 text-sm text-purple-500">{project.resources.modelsDeployed} models deployed</div>
        </div>
        <div className="bg-[#0D0F2B] p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="text-gray-400">Next Milestone</div>
            <Clock className="h-4 w-4 text-orange-500" />
          </div>
          <div className="mt-2 text-xl font-semibold text-white truncate">{project.timeline.nextMilestone}</div>
          <div className="mt-1 text-sm text-orange-500">in {project.timeline.daysToNextMilestone} days</div>
        </div>
      </div>

      {/* Project Lead & Progress */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-[#0D0F2B] p-6 rounded-lg">
          <h2 className="text-lg font-medium text-white mb-4">Research Progress</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Overall Progress</span>
                  <span className="text-white font-medium">{project.progress}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div 
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1C1E33] p-3 rounded-lg">
                <div className="text-sm text-gray-400">Sensitivity</div>
                <div className="text-lg font-semibold text-white">{project.metrics.sensitivity}%</div>
              </div>
              <div className="bg-[#1C1E33] p-3 rounded-lg">
                <div className="text-sm text-gray-400">Specificity</div>
                <div className="text-lg font-semibold text-white">{project.metrics.specificity}%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0D0F2B] p-6 rounded-lg">
          <h2 className="text-lg font-medium text-white mb-4">Project Lead</h2>
          <div className="flex items-start gap-4">
            <div className="text-4xl">{project.lead.avatar}</div>
            <div>
              <div className="font-medium text-white">{project.lead.name}</div>
              <div className="text-gray-400">{project.lead.role}</div>
              <div className="mt-2 flex items-center gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Publications:</span>
                  <span className="ml-1 text-white">{project.lead.publications}</span>
                </div>
                <div>
                  <span className="text-gray-400">Citations:</span>
                  <span className="ml-1 text-white">{project.lead.citations}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Files Section */}
      <div className="bg-[#0D0F2B] rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-white">Research Files</h2>
          <button className="text-gray-400 hover:text-white transition-colors">
            View All <ChevronRight className="inline-block h-4 w-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {project.files.map((file) => {
            const Icon = file.icon;
            return (
              <Link
                key={file.id}
                href={`/workspace/projects/${id}/files/${file.id}`}
                className="group flex items-start gap-4 p-4 bg-[#1C1E33] rounded-lg hover:bg-[#252942] transition-colors"
              >
                <div className={`${file.bgColor} p-2 rounded-lg`}>
                  <Icon className={`h-5 w-5 ${file.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-white truncate">{file.name}</h3>
                      <p className="text-sm text-gray-400">
                        {file.size} • {file.lastModified}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="mt-2 flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <span className="text-gray-400">By</span>
                      <span className="text-white">{file.author}</span>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-xs
                      ${file.status === 'reviewed' ? 'bg-green-500/10 text-green-500' :
                        file.status === 'processing' ? 'bg-blue-500/10 text-blue-500' :
                        file.status === 'validated' ? 'bg-purple-500/10 text-purple-500' :
                        'bg-orange-500/10 text-orange-500'
                      }`}
                    >
                      {file.status.charAt(0).toUpperCase() + file.status.slice(1)}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-[#0D0F2B] rounded-lg p-6">
        <h2 className="text-lg font-medium text-white mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {project.recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <div className={`p-2 rounded-lg ${
                activity.type === 'milestone' ? 'bg-green-500/10' :
                activity.type === 'collaboration' ? 'bg-blue-500/10' :
                'bg-purple-500/10'
              }`}>
                <activity.icon className={`h-5 w-5 ${activity.color}`} />
              </div>
              <div>
                <h3 className="font-medium text-white">{activity.title}</h3>
                <p className="text-sm text-gray-400">{activity.description}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 