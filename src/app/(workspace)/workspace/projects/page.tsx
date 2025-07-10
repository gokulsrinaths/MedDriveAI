'use client';

import { useState } from 'react';
import { 
  Brain, 
  Beaker, 
  Users, 
  Clock, 
  TrendingUp, 
  Search,
  Filter,
  ArrowUpRight,
  Plus,
  LineChart,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';
import CreateProjectDialog from '@/components/CreateProjectDialog';

// Shared mock data - matches with [id]/page.tsx
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
    icon: Brain,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10'
  },
  {
    id: 'proj-124',
    name: 'Patient Recovery Pattern Analysis',
    description: 'Statistical analysis of recovery patterns and treatment efficacy across diverse patient populations.',
    status: 'active',
    progress: 65,
    startDate: '2024-02-01',
    lastUpdated: '2024-03-19',
    lead: {
      name: 'Dr. Michael Lee',
      avatar: '👨‍⚕️',
      role: 'Data Scientist',
      publications: 32,
      citations: 1240
    },
    team: {
      size: 18,
      active: 15,
      departments: ['Data Science', 'Clinical Research', 'Statistics']
    },
    metrics: {
      accuracy: 94.2,
      sensitivity: 92.8,
      specificity: 93.5,
      f1Score: 93.1
    },
    resources: {
      computeHours: 8750,
      dataProcessed: '28.3TB',
      modelsDeployed: 5,
      activeExperiments: 8
    },
    icon: LineChart,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    id: 'proj-125',
    name: 'Drug Delivery Optimization',
    description: 'Enhancing drug delivery systems through AI-driven optimization and personalized medicine approaches.',
    status: 'active',
    progress: 42,
    startDate: '2024-02-15',
    lastUpdated: '2024-03-18',
    lead: {
      name: 'Dr. Emily Brown',
      avatar: '👩‍⚕️',
      role: 'Clinical Researcher',
      publications: 28,
      citations: 980
    },
    team: {
      size: 16,
      active: 14,
      departments: ['Clinical Research', 'Pharmacology', 'AI Research']
    },
    metrics: {
      accuracy: 91.5,
      sensitivity: 89.8,
      specificity: 90.2,
      f1Score: 90.0
    },
    resources: {
      computeHours: 6240,
      dataProcessed: '15.6TB',
      modelsDeployed: 3,
      activeExperiments: 6
    },
    icon: Beaker,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10'
  }
];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [projects, setProjects] = useState(PROJECTS_DATA);

  const handleCreateProject = (newProject: any) => {
    setProjects([newProject, ...projects]);
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.lead.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = !selectedStatus || project.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">Research Projects</h1>
          <p className="text-gray-400">Manage and track ongoing research initiatives</p>
        </div>
        <button 
          onClick={() => setIsCreateDialogOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus className="h-4 w-4" />
          New Project
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1C1E33] text-white pl-10 pr-4 py-2 rounded-lg border border-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="relative group">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1C1E33] text-white rounded-lg hover:bg-[#252942] transition-colors">
            <Filter className="h-5 w-5" />
            Filter by Status
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-[#1C1E33] rounded-lg shadow-lg border border-gray-800 hidden group-hover:block">
            {['active', 'completed', 'on_hold'].map(status => (
              <button
                key={status}
                onClick={() => setSelectedStatus(selectedStatus === status ? null : status)}
                className={`w-full text-left px-4 py-2 hover:bg-[#252942] transition-colors ${
                  selectedStatus === status ? 'text-blue-500' : 'text-white'
                }`}
              >
                {status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          const Icon = project.icon;
          return (
            <Link
              key={project.id}
              href={`/workspace/projects/${project.id}`}
              className="group bg-[#0D0F2B] rounded-lg p-6 hover:bg-[#1C1E33] transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className={`${project.bgColor} p-3 rounded-lg`}>
                  <Icon className={`h-6 w-6 ${project.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        {project.name}
                      </h3>
                      <p className="text-gray-400 mt-1 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="bg-[#1C1E33] rounded-lg p-3">
                      <div className="text-sm text-gray-400">Accuracy</div>
                      <div className="text-lg font-semibold text-white">
                        {project.metrics.accuracy}%
                      </div>
                    </div>
                    <div className="bg-[#1C1E33] rounded-lg p-3">
                      <div className="text-sm text-gray-400">Team</div>
                      <div className="text-lg font-semibold text-white">
                        {project.team.active}/{project.team.size}
                      </div>
                    </div>
                    <div className="bg-[#1C1E33] rounded-lg p-3">
                      <div className="text-sm text-gray-400">Progress</div>
                      <div className="text-lg font-semibold text-white">
                        {project.progress}%
                      </div>
                    </div>
                  </div>

                  {/* Project Meta */}
                  <div className="flex items-center gap-6 mt-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{project.lead.avatar}</span>
                      <span className="font-medium text-white">{project.lead.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Updated {project.lastUpdated}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {project.team.size} members
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Create Project Dialog */}
      <CreateProjectDialog
        isOpen={isCreateDialogOpen}
        onClose={() => setIsCreateDialogOpen(false)}
        onSubmit={handleCreateProject}
      />
    </div>
  );
} 