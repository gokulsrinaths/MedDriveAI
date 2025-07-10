'use client';

import { useState } from 'react';
import { ArrowLeft, FileText, Tag, Calendar, BarChart2, ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface CategoryStats {
  totalPatients?: number;
  averageAge?: number;
  genderDistribution?: {
    male: number;
    female: number;
  };
  ageGroups?: {
    '18-30': number;
    '31-50': number;
    '51-70': number;
    '70+': number;
  };
  successRate?: number;
  averageRecoveryTime?: number;
  complications?: {
    mild: number;
    moderate: number;
    severe: number;
  };
  fullyVaccinated?: number;
  partiallyVaccinated?: number;
  unvaccinated?: number;
  boosterShots?: number;
  efficacyRate?: number;
}

interface Category {
  name: string;
  stats: CategoryStats;
}

interface FileDetails {
  id: string;
  name: string;
  size: string;
  uploadDate: string;
  summary: string;
  categories: Category[];
}

// Mock data for file details
const FILE_DETAILS: FileDetails = {
    id: '1',
  name: 'Research_Data_1.pdf',
  size: '2.4 MB',
  uploadDate: '2024-03-15',
  summary: 'This research paper focuses on COVID-19 vaccine efficacy across different age groups and demographics. Key findings indicate a 95% effectiveness rate in preventing severe cases.',
  categories: [
    {
      name: 'Patient Demographics',
      stats: {
        totalPatients: 850,
        averageAge: 42,
        genderDistribution: { male: 45, female: 55 },
        ageGroups: {
          '18-30': 25,
          '31-50': 45,
          '51-70': 20,
          '70+': 10
        }
      }
    },
    {
      name: 'Treatment Outcomes',
      stats: {
        successRate: 82,
        averageRecoveryTime: 14,
        complications: {
          mild: 12,
          moderate: 5,
          severe: 1
        }
      }
    },
    {
      name: 'Vaccination Data',
      stats: {
        fullyVaccinated: 750,
        partiallyVaccinated: 50,
        unvaccinated: 50,
        boosterShots: 400,
        efficacyRate: 95.2
      }
    }
  ]
};

export default function FileDetailsPage({ params }: { params: { id: string } }) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/workspace/files"
          className="inline-flex items-center text-gray-400 hover:text-white mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Files
        </Link>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
          <FileText className="h-8 w-8 text-blue-500" />
            <div>
              <h1 className="text-2xl font-semibold text-white">{FILE_DETAILS.name}</h1>
              <div className="flex items-center gap-4 text-gray-400 mt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {FILE_DETAILS.uploadDate}
                </span>
                <span>{FILE_DETAILS.size}</span>
              </div>
            </div>
        </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-[#0D0F2B] rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-white mb-2">Summary</h2>
        <p className="text-gray-400 leading-relaxed">{FILE_DETAILS.summary}</p>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Categories</h2>
        {FILE_DETAILS.categories.map((category) => (
          <div 
            key={category.name}
            className="bg-[#0D0F2B] rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between p-4 text-left hover:bg-[#1C1E33] transition-colors"
              onClick={() => setExpandedCategory(
                expandedCategory === category.name ? null : category.name
              )}
            >
              <div className="flex items-center gap-3">
                <Tag className="h-5 w-5 text-blue-500" />
                <span className="font-medium text-white">{category.name}</span>
              </div>
              <ChevronDown 
                className={`h-5 w-5 text-gray-400 transition-transform ${
                  expandedCategory === category.name ? 'transform rotate-180' : ''
                }`}
              />
        </button>
            
            {expandedCategory === category.name && (
              <div className="p-4 pt-0">
                <div className="border-t border-[#1C1E33] pt-4">
                  {/* Render different stats based on category */}
                  {category.name === 'Patient Demographics' && category.stats.genderDistribution && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#1C1E33] rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Total Patients</div>
                        <div className="text-2xl font-semibold text-white">
                          {category.stats.totalPatients}
                        </div>
      </div>
                      <div className="bg-[#1C1E33] rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Average Age</div>
                        <div className="text-2xl font-semibold text-white">
                          {category.stats.averageAge}
          </div>
        </div>
                      <div className="col-span-2 bg-[#1C1E33] rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-2">Gender Distribution</div>
                        <div className="flex gap-4">
                          <div>
                            <div className="text-sm text-gray-400">Male</div>
                            <div className="text-xl font-semibold text-white">
                              {category.stats.genderDistribution.male}%
                            </div>
              </div>
                          <div>
                            <div className="text-sm text-gray-400">Female</div>
                            <div className="text-xl font-semibold text-white">
                              {category.stats.genderDistribution.female}%
              </div>
              </div>
              </div>
            </div>
          </div>
                  )}
                  
                  {category.name === 'Treatment Outcomes' && category.stats.complications && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#1C1E33] rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Success Rate</div>
                        <div className="text-2xl font-semibold text-white">
                          {category.stats.successRate}%
                        </div>
                      </div>
                      <div className="bg-[#1C1E33] rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Recovery Time</div>
                        <div className="text-2xl font-semibold text-white">
                          {category.stats.averageRecoveryTime} days
                        </div>
                  </div>
                      <div className="col-span-2 bg-[#1C1E33] rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-2">Complications</div>
                        <div className="flex gap-4">
                          {Object.entries(category.stats.complications).map(([key, value]) => (
                            <div key={key}>
                              <div className="text-sm text-gray-400 capitalize">{key}</div>
                              <div className="text-xl font-semibold text-white">{value}%</div>
                </div>
              ))}
            </div>
          </div>
                    </div>
                  )}

                  {category.name === 'Vaccination Data' && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#1C1E33] rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Fully Vaccinated</div>
                        <div className="text-2xl font-semibold text-white">
                          {category.stats.fullyVaccinated}
                        </div>
                      </div>
                      <div className="bg-[#1C1E33] rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Efficacy Rate</div>
                        <div className="text-2xl font-semibold text-white">
                          {category.stats.efficacyRate}%
                        </div>
                      </div>
                      <div className="col-span-2 bg-[#1C1E33] rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-2">Vaccination Status</div>
                        <div className="flex gap-4">
                          <div>
                            <div className="text-sm text-gray-400">Partial</div>
                            <div className="text-xl font-semibold text-white">
                              {category.stats.partiallyVaccinated}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">Unvaccinated</div>
                            <div className="text-xl font-semibold text-white">
                              {category.stats.unvaccinated}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">Boosters</div>
                            <div className="text-xl font-semibold text-white">
                              {category.stats.boosterShots}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
            </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 