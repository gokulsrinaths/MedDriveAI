'use client';

import { useState } from 'react';
import { X, Plus, Brain, Beaker, LineChart, Users } from 'lucide-react';

interface CreateProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (projectData: any) => void;
}

export default function CreateProjectDialog({ isOpen, onClose, onSubmit }: CreateProjectDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: 'ai_research',
    teamSize: '',
    departments: [] as string[],
    lead: {
      name: '',
      role: '',
    }
  });

  const projectTypes = [
    { id: 'ai_research', name: 'AI Research', icon: Brain, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { id: 'clinical_trial', name: 'Clinical Trial', icon: Beaker, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { id: 'data_analysis', name: 'Data Analysis', icon: LineChart, color: 'text-blue-500', bg: 'bg-blue-500/10' }
  ];

  const departmentOptions = [
    'AI Research',
    'Clinical',
    'Data Science',
    'Medical Imaging',
    'Pharmacology',
    'Statistics'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      id: `proj-${Date.now()}`,
      status: 'active',
      progress: 0,
      startDate: new Date().toISOString().split('T')[0],
      lastUpdated: new Date().toISOString().split('T')[0],
      metrics: {
        accuracy: 0,
        sensitivity: 0,
        specificity: 0,
        f1Score: 0
      },
      resources: {
        computeHours: 0,
        dataProcessed: '0TB',
        modelsDeployed: 0,
        activeExperiments: 0
      },
      team: {
        size: parseInt(formData.teamSize) || 1,
        active: 0,
        departments: formData.departments
      },
      lead: {
        ...formData.lead,
        avatar: '👨‍⚕️',
        publications: 0,
        citations: 0
      }
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#0D0F2B] rounded-lg w-full max-w-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Create New Project</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Project Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#1C1E33] text-white px-4 py-2 rounded-lg border border-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter project name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Description
              </label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-[#1C1E33] text-white px-4 py-2 rounded-lg border border-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Describe your research project"
                rows={3}
              />
            </div>
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Project Type
            </label>
            <div className="grid grid-cols-3 gap-4">
              {projectTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, type: type.id })}
                    className={`flex flex-col items-center p-4 rounded-lg border ${
                      formData.type === type.id
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-gray-800 bg-[#1C1E33]'
                    } hover:border-blue-500/50 transition-colors`}
                  >
                    <div className={`${type.bg} p-2 rounded-lg mb-2`}>
                      <Icon className={`h-5 w-5 ${type.color}`} />
                    </div>
                    <span className="text-sm text-white">{type.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Team Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Team Size
              </label>
              <input
                type="number"
                required
                min="1"
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                className="w-full bg-[#1C1E33] text-white px-4 py-2 rounded-lg border border-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Departments
              </label>
              <select
                multiple
                value={formData.departments}
                onChange={(e) => setFormData({
                  ...formData,
                  departments: Array.from(e.target.selectedOptions, option => option.value)
                })}
                className="w-full bg-[#1C1E33] text-white px-4 py-2 rounded-lg border border-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                {departmentOptions.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Lead */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Lead Name
              </label>
              <input
                type="text"
                required
                value={formData.lead.name}
                onChange={(e) => setFormData({
                  ...formData,
                  lead: { ...formData.lead, name: e.target.value }
                })}
                className="w-full bg-[#1C1E33] text-white px-4 py-2 rounded-lg border border-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Dr. Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Lead Role
              </label>
              <input
                type="text"
                required
                value={formData.lead.role}
                onChange={(e) => setFormData({
                  ...formData,
                  lead: { ...formData.lead, role: e.target.value }
                })}
                className="w-full bg-[#1C1E33] text-white px-4 py-2 rounded-lg border border-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Lead Researcher"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Plus className="h-4 w-4" />
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 