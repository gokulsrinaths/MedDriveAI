'use client';

import { useState } from 'react';
import { 
  GitCommit, 
  FileText, 
  Users, 
  Calendar, 
  ChevronRight, 
  Search,
  Filter,
  ArrowUpRight,
  Brain,
  Beaker,
  Microscope,
  FlaskConical,
  LineChart,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

const COMMITS = [
  {
    id: 'c123',
    type: 'research_milestone',
    icon: Brain,
    iconColor: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    title: 'AI Model Performance Breakthrough',
    description: 'Achieved 97.8% accuracy in tumor detection using enhanced CNN architecture',
    author: {
      name: 'Dr. Sarah Chen',
      avatar: '👩‍⚕️',
      role: 'Lead AI Researcher'
    },
    project: 'Medical Imaging AI',
    timestamp: '2 hours ago',
    stats: {
      accuracy: '97.8%',
      improvement: '+15.3%',
      samplesAnalyzed: '15,234'
    },
    files: [
      'models/tumor_detection_v2.py',
      'data/training_results.json',
      'docs/methodology.md'
    ],
    collaborators: 3,
    branch: 'feature/enhanced-cnn'
  },
  {
    id: 'c124',
    type: 'data_analysis',
    icon: LineChart,
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    title: 'Patient Recovery Pattern Analysis',
    description: 'Statistical analysis reveals correlation between early intervention and recovery speed',
    author: {
      name: 'Dr. Michael Lee',
      avatar: '👨‍⚕️',
      role: 'Data Scientist'
    },
    project: 'COVID-19 Research',
    timestamp: '4 hours ago',
    stats: {
      pValue: '0.001',
      confidence: '95%',
      sampleSize: '2,450'
    },
    files: [
      'analysis/recovery_patterns.R',
      'data/patient_outcomes.csv',
      'visualizations/correlation_matrix.png'
    ],
    collaborators: 4,
    branch: 'analysis/recovery-patterns'
  },
  {
    id: 'c125',
    type: 'experiment',
    icon: Beaker,
    iconColor: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    title: 'Treatment Protocol Optimization',
    description: 'Modified drug delivery schedule shows 34% better absorption rate',
    author: {
      name: 'Dr. Emily Brown',
      avatar: '👩‍⚕️',
      role: 'Clinical Researcher'
    },
    project: 'Drug Delivery Systems',
    timestamp: '6 hours ago',
    stats: {
      improvement: '+34%',
      participants: 180,
      duration: '12 weeks'
    },
    files: [
      'protocols/delivery_schedule_v3.pdf',
      'data/absorption_rates.xlsx',
      'results/comparative_analysis.md'
    ],
    collaborators: 5,
    branch: 'experiment/delivery-optimization'
  },
  {
    id: 'c126',
    type: 'methodology',
    icon: Microscope,
    iconColor: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    title: 'Enhanced Gene Sequencing Method',
    description: 'Implemented new CRISPR-based technique for faster gene identification',
    author: {
      name: 'Dr. James Wilson',
      avatar: '👨‍⚕️',
      role: 'Genetic Researcher'
    },
    project: 'Genomic Studies',
    timestamp: '12 hours ago',
    stats: {
      speedImprovement: '2.5x',
      accuracy: '99.99%',
      costReduction: '40%'
    },
    files: [
      'methods/crispr_protocol_v2.md',
      'data/sequence_results.fasta',
      'validation/accuracy_tests.xlsx'
    ],
    collaborators: 6,
    branch: 'method/crispr-enhancement'
  },
  {
    id: 'c127',
    type: 'safety_protocol',
    icon: AlertCircle,
    iconColor: 'text-red-500',
    bgColor: 'bg-red-500/10',
    title: 'Updated Safety Guidelines',
    description: 'Enhanced biosafety protocols for handling novel viral strains',
    author: {
      name: 'Dr. Lisa Martinez',
      avatar: '👩‍⚕️',
      role: 'Safety Officer'
    },
    project: 'Viral Research',
    timestamp: '1 day ago',
    stats: {
      riskReduction: '85%',
      compliance: '100%',
      procedures: 24
    },
    files: [
      'safety/biosafety_guidelines_v3.pdf',
      'protocols/emergency_procedures.md',
      'training/safety_manual.pdf'
    ],
    collaborators: 8,
    branch: 'update/safety-protocols'
  }
];

export default function CommitsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredCommits = COMMITS.filter(commit => {
    const matchesSearch = 
      commit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      commit.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      commit.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = !selectedType || commit.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">Research History</h1>
          <p className="text-gray-400">Track and review research milestones and changes</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search commits..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1C1E33] text-white pl-10 pr-4 py-2 rounded-lg border border-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="relative group">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1C1E33] text-white rounded-lg hover:bg-[#252942] transition-colors">
            <Filter className="h-5 w-5" />
            Filter by Type
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-[#1C1E33] rounded-lg shadow-lg border border-gray-800 hidden group-hover:block">
            {['research_milestone', 'data_analysis', 'experiment', 'methodology', 'safety_protocol'].map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(selectedType === type ? null : type)}
                className={`w-full text-left px-4 py-2 hover:bg-[#252942] transition-colors ${
                  selectedType === type ? 'text-blue-500' : 'text-white'
                }`}
              >
                {type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Commits List */}
      <div className="space-y-4">
        {filteredCommits.map((commit) => {
          const Icon = commit.icon;
          return (
            <div
              key={commit.id}
              className="bg-[#0D0F2B] rounded-lg p-6 hover:bg-[#1C1E33] transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className={`${commit.bgColor} p-2 rounded-lg`}>
                  <Icon className={`h-5 w-5 ${commit.iconColor}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        {commit.title}
                      </h3>
                      <p className="text-gray-400 mt-1">
                        {commit.description}
                      </p>
                    </div>
                    <Link
                      href={`/workspace/commits/${commit.id}`}
                      className="shrink-0 text-gray-400 hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mt-4 mb-4">
                    {Object.entries(commit.stats).map(([key, value]) => (
                      <div key={key} className="bg-[#1C1E33] rounded-lg p-3">
                        <div className="text-sm text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="text-lg font-semibold text-white mt-1">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Meta Information */}
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{commit.author.avatar}</span>
                      <span className="font-medium text-white">{commit.author.name}</span>
                      <span className="text-gray-500">({commit.author.role})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {commit.timestamp}
                    </div>
                    <div className="flex items-center gap-2">
                      <GitCommit className="h-4 w-4" />
                      {commit.branch}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {commit.collaborators} collaborators
                    </div>
                  </div>

                  {/* Files Changed */}
                  <div className="mt-4 space-y-2">
                    <div className="text-sm text-gray-400">Files Changed:</div>
                    <div className="grid grid-cols-2 gap-2">
                      {commit.files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm bg-[#1C1E33] rounded-lg p-2"
                        >
                          <FileText className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-300 truncate">{file}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 