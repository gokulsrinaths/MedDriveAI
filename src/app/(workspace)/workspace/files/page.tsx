'use client';

import { useState } from 'react';
import { FileText, Filter, Upload } from 'lucide-react';
import Link from 'next/link';
import FileUploadDialog from '@/components/FileUploadDialog';

interface ResearchFile {
  id: string;
  name: string;
  size: string;
  addedDays: number;
  summary: string;
  categories: {
    name: string;
    stats: Record<string, any>;
  }[];
}

const INITIAL_FILES: ResearchFile[] = [
  {
    id: '1',
    name: 'Research_Data_1.pdf',
    size: '2.4 MB',
    addedDays: 1,
    summary: 'COVID-19 vaccine efficacy study across different age groups. Shows 95% effectiveness in preventing severe cases.',
    categories: [
      {
        name: 'Patient Demographics',
        stats: {
          totalPatients: 850,
          averageAge: 42,
          genderDistribution: { male: 45, female: 55 }
        }
      },
      {
        name: 'Treatment Outcomes',
        stats: {
          successRate: 82,
          averageRecoveryTime: 14,
          complications: { mild: 12, moderate: 5, severe: 1 }
        }
      }
    ]
  },
  {
    id: '2',
    name: 'Research_Data_2.pdf',
    size: '2.4 MB',
    addedDays: 2,
    summary: 'Long-term effects study on recovered patients. Tracking symptoms and quality of life improvements.',
    categories: [
      {
        name: 'Patient Demographics',
        stats: {
          totalPatients: 920,
          averageAge: 39,
          genderDistribution: { male: 51, female: 49 }
        }
      },
      {
        name: 'Recovery Metrics',
        stats: {
          fullRecovery: 85,
          partialRecovery: 12,
          ongoingSymptoms: 3
        }
      }
    ]
  },
  {
    id: '3',
    name: 'Research_Data_3.pdf',
    size: '2.4 MB',
    addedDays: 3,
    summary: 'Vaccination side effects analysis across different demographics. Focus on immediate and delayed reactions.',
    categories: [
      {
        name: 'Vaccination Data',
        stats: {
          totalVaccinated: 1500,
          sideEffects: { none: 80, mild: 15, moderate: 4, severe: 1 }
        }
      }
    ]
  },
  {
    id: '4',
    name: 'Research_Data_4.pdf',
    size: '2.4 MB',
    addedDays: 4,
    summary: 'Treatment protocol effectiveness comparison. Analysis of different medication combinations.',
    categories: [
      {
        name: 'Treatment Data',
        stats: {
          protocols: 5,
          totalPatients: 750,
          successRates: { 'Protocol A': 88, 'Protocol B': 92, 'Protocol C': 85 }
        }
      }
    ]
  },
  {
    id: '5',
    name: 'Research_Data_5.pdf',
    size: '2.4 MB',
    addedDays: 5,
    summary: 'Hospital readmission patterns study. Identifying risk factors and preventive measures.',
    categories: [
      {
        name: 'Readmission Data',
        stats: {
          totalCases: 500,
          readmissionRate: 12,
          riskFactors: ['Age > 65', 'Multiple Comorbidities', 'Delayed Initial Treatment']
        }
      }
    ]
  },
  {
    id: '6',
    name: 'Research_Data_6.pdf',
    size: '2.4 MB',
    addedDays: 6,
    summary: 'Variant transmission analysis. Comparing infection rates and severity across variants.',
    categories: [
      {
        name: 'Variant Analysis',
        stats: {
          variantsStudied: 3,
          transmissionRates: { 'Alpha': 1.4, 'Beta': 1.6, 'Delta': 2.0 },
          severityComparison: { 'Alpha': 'Moderate', 'Beta': 'High', 'Delta': 'Very High' }
        }
      }
    ]
  }
];

export default function FilesPage() {
  const [files, setFiles] = useState<ResearchFile[]>(INITIAL_FILES);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const handleUploadComplete = (newFile: ResearchFile) => {
    setFiles(prevFiles => [newFile, ...prevFiles]);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-white mb-1">Files</h1>
          <p className="text-gray-400">Manage and organize your research files</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1C1E33] text-white rounded-lg hover:bg-[#252942] transition-colors">
            <Filter className="h-5 w-5" />
            Filter
          </button>
          <button 
            onClick={() => setIsUploadOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Upload className="h-5 w-5" />
            Upload Files
          </button>
        </div>
      </div>

      {/* Files List */}
      <div className="space-y-2">
        {files.map((file) => (
          <Link
            key={file.id}
            href={`/workspace/files/${file.id}`}
            className="block bg-[#0D0F2B] rounded-lg p-4 hover:bg-[#1C1E33] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-blue-500" />
              <div className="flex-1">
                <div className="font-medium text-white group-hover:text-blue-500 transition-colors">
                  {file.name}
                </div>
                <div className="text-sm text-gray-400">
                  Added {file.addedDays} {file.addedDays === 1 ? 'day' : 'days'} ago • {file.size}
                </div>
                <div className="text-sm text-gray-500 mt-1 line-clamp-1">
                  {file.summary}
                </div>
                <div className="flex gap-2 mt-2">
                  {file.categories.map((category) => (
                    <span 
                      key={category.name}
                      className="inline-flex items-center px-2 py-1 rounded-md bg-[#1C1E33] text-xs text-gray-400"
                    >
                      {category.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Upload Dialog */}
      <FileUploadDialog
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onUploadComplete={handleUploadComplete}
      />
    </div>
  );
} 