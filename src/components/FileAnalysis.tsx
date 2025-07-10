'use client';

import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { ProjectFile } from '@/types/project';
import { FileText, BarChart2, PieChart } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: '#9CA3AF',
      },
    },
  },
  scales: {
    y: {
      ticks: { color: '#9CA3AF' },
      grid: { color: '#1F2937' },
    },
    x: {
      ticks: { color: '#9CA3AF' },
      grid: { color: '#1F2937' },
    },
  },
};

interface FileAnalysisProps {
  file: ProjectFile;
}

export default function FileAnalysis({ file }: FileAnalysisProps) {
  const [activeTab, setActiveTab] = useState<'charts' | 'summary'>('charts');

  const renderDemographicsCharts = () => {
    const genderData = {
      labels: ['Male', 'Female'],
      datasets: [
        {
          data: [48, 52],
          backgroundColor: ['#3B82F6', '#EC4899'],
          borderColor: ['#2563EB', '#DB2777'],
        },
      ],
    };

    const ageData = {
      labels: ['20-30', '31-40', '41-50', '51-60', '61+'],
      datasets: [
        {
          label: 'Age Distribution',
          data: [15, 25, 30, 20, 10],
          backgroundColor: '#3B82F6',
        },
      ],
    };

    return (
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-3">Gender Distribution</h4>
          <div className="h-64">
            <Doughnut data={genderData} options={chartOptions} />
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-3">Age Distribution</h4>
          <div className="h-64">
            <Bar data={ageData} options={chartOptions} />
          </div>
        </div>
      </div>
    );
  };

  const renderVaccinationCharts = () => {
    const efficacyData = {
      labels: ['Effective', 'Breakthrough', 'Pending'],
      datasets: [
        {
          data: [98.5, 1.4, 0.1],
          backgroundColor: ['#10B981', '#F59E0B', '#6B7280'],
        },
      ],
    };

    const sideEffectsData = {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Mild',
          data: [15, 12, 8, 5],
          borderColor: '#3B82F6',
          backgroundColor: '#3B82F680',
        },
        {
          label: 'Moderate',
          data: [3, 2, 1, 0],
          borderColor: '#F59E0B',
          backgroundColor: '#F59E0B80',
        },
      ],
    };

    return (
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-3">Vaccine Efficacy</h4>
          <div className="h-64">
            <Doughnut data={efficacyData} options={chartOptions} />
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-3">Side Effects Over Time</h4>
          <div className="h-64">
            <Line data={sideEffectsData} options={chartOptions} />
          </div>
        </div>
      </div>
    );
  };

  const renderLongTermCharts = () => {
    const recoveryData = {
      labels: ['Month 3', 'Month 6', 'Month 9', 'Month 12'],
      datasets: [
        {
          label: 'Recovery Rate',
          data: [45, 65, 78, 89],
          borderColor: '#10B981',
          backgroundColor: '#10B98180',
        },
        {
          label: 'QoL Improvement',
          data: [30, 50, 65, 76],
          borderColor: '#3B82F6',
          backgroundColor: '#3B82F680',
        },
      ],
    };

    const symptomsData = {
      labels: ['Fatigue', 'Breathing', 'Joint Pain', 'Brain Fog', 'Other'],
      datasets: [
        {
          label: 'Persistent Symptoms',
          data: [8, 5, 4, 3, 3],
          backgroundColor: '#3B82F6',
        },
      ],
    };

    return (
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-3">Recovery Progress</h4>
          <div className="h-64">
            <Line data={recoveryData} options={chartOptions} />
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-3">Persistent Symptoms</h4>
          <div className="h-64">
            <Bar data={symptomsData} options={chartOptions} />
          </div>
        </div>
      </div>
    );
  };

  const renderCharts = () => {
    switch (file.name) {
      case 'Patient Demographics Analysis.pdf':
        return renderDemographicsCharts();
      case 'Vaccination Efficacy Data.xlsx':
        return renderVaccinationCharts();
      case 'Long-term Effects Study.pdf':
        return renderLongTermCharts();
      default:
        return null;
    }
  };

  const renderSummary = () => {
    const summaries = {
      'Patient Demographics Analysis.pdf': `Analysis of 1,250 COVID-19 patients shows a balanced gender distribution (48% male, 52% female) with a median age of 45 years. The study population represents diverse age groups, with the highest concentration in the 41-50 age bracket. Treatment success rate stands at 76%, indicating positive outcomes for the majority of patients.`,
      'Vaccination Efficacy Data.xlsx': `Study of 850 vaccinated individuals demonstrates a remarkable 98.5% efficacy rate. Only 12 breakthrough cases were recorded, with minimal severe side effects (0.1%). Side effects were predominantly mild (15%) to moderate (3%), decreasing significantly after the first week post-vaccination.`,
      'Long-term Effects Study.pdf': `12-month follow-up study reveals an 89% overall recovery rate. Quality of life improvements were observed in 76% of patients. However, 23% reported persistent symptoms, with fatigue being the most common (8%). The study shows progressive improvement in symptoms over time, with significant recovery milestones at 6 and 9 months post-infection.`
    };

    return (
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 leading-relaxed">
          {summaries[file.name as keyof typeof summaries]}
        </p>
      </div>
    );
  };

  return (
    <div className="mt-4 pt-4 border-t border-gray-700">
      <div className="flex gap-4 mb-6">
        <button
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            activeTab === 'charts'
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
          onClick={() => setActiveTab('charts')}
        >
          <BarChart2 className="h-5 w-5" />
          Charts
        </button>
        <button
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            activeTab === 'summary'
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
          onClick={() => setActiveTab('summary')}
        >
          <FileText className="h-5 w-5" />
          Summary
        </button>
      </div>

      <div className="bg-[#0A0B1C] rounded-lg p-4">
        {activeTab === 'charts' ? renderCharts() : renderSummary()}
      </div>
    </div>
  );
} 