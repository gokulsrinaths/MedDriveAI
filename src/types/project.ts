export interface Collaborator {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface FileStats {
  patientCount?: number;
  avgAge?: number;
  genderDistribution?: { male: number; female: number };
  treatmentSuccess?: number;
  totalVaccinated?: number;
  breakthroughCases?: number;
  efficacyRate?: number;
  sideEffects?: { mild: number; moderate: number; severe: number };
  followUpMonths?: number;
  persistentSymptoms?: number;
  recoveryRate?: number;
  qolImprovement?: number;
  [key: string]: number | { [key: string]: number } | undefined;
}

export interface ProjectFile {
  id: string;
  name: string;
  type: 'pdf' | 'excel' | 'doc' | 'image';
  size: string;
  lastModified: string;
  stats: FileStats;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  created_at: string;
  collaborators: Collaborator[];
  files: ProjectFile[];
} 