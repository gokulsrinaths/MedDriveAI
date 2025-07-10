import { User } from './commit';

export interface MockFile {
  id: string;
  name: string;
  type: 'dicom' | 'pdf' | 'csv' | 'json' | 'md' | 'xlsx' | 'jpg' | 'txt';
  size: number;
  lastModified: string;
  description: string;
  version: number;
  annotations: number;
  comments: number;
  uploadedBy: User;
  path: string;
}

export interface MockProject {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'on_hold';
  startDate: string;
  endDate?: string;
  principalInvestigator: User;
  collaborators: User[];
  files: MockFile[];
  patientCount: number;
  institution: string;
  ethicsApproval: string;
  tags: string[];
  progress: number;
  lastActivity: string;
} 