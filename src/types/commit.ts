export type CommitType = 'file_upload' | 'annotation_added' | 'file_deleted' | 'project_updated' | 'collaborator_added';

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface CommitChange {
  type: 'added' | 'modified' | 'deleted';
  path: string;
  name: string;
  oldContent?: string;
  newContent?: string;
}

export interface Commit {
  id: string;
  title: string;
  description: string;
  type: CommitType;
  timestamp: string;
  author: User;
  projectId: string;
  changes: CommitChange[];
  metadata?: {
    fileId?: string;
    annotationId?: string;
    collaboratorId?: string;
  };
}

// Mock data generator for commits
export const generateMockCommits = (count: number = 10): Commit[] => {
  const mockUsers: User[] = [
    { id: '1', name: 'Dr. Sarah Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
    { id: '2', name: 'Dr. James Wilson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James' },
    { id: '3', name: 'Dr. Emily Rodriguez', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily' }
  ];

  const mockCommitTypes: CommitType[] = ['file_upload', 'annotation_added', 'file_deleted', 'project_updated', 'collaborator_added'];
  const mockFileNames = ['patient_data.csv', 'mri_scan.dcm', 'lab_results.pdf', 'research_notes.md', 'clinical_trial.xlsx'];

  return Array.from({ length: count }, (_, i) => {
    const type = mockCommitTypes[Math.floor(Math.random() * mockCommitTypes.length)];
    const author = mockUsers[Math.floor(Math.random() * mockUsers.length)];
    const fileName = mockFileNames[Math.floor(Math.random() * mockFileNames.length)];
    
    const getCommitDetails = (type: CommitType): { title: string; description: string; changes: CommitChange[] } => {
      switch (type) {
        case 'file_upload':
          return {
            title: `Uploaded ${fileName}`,
            description: `Added new ${fileName.split('.').pop()?.toUpperCase()} file to the project`,
            changes: [{
              type: 'added' as const,
              path: `/files/${fileName}`,
              name: fileName
            }]
          };
        case 'annotation_added':
          return {
            title: `Added annotation to ${fileName}`,
            description: `New research findings documented in ${fileName}`,
            changes: [{
              type: 'modified' as const,
              path: `/files/${fileName}`,
              name: fileName,
              oldContent: 'Previous version',
              newContent: 'Updated with annotations'
            }]
          };
        case 'file_deleted':
          return {
            title: `Removed ${fileName}`,
            description: `Deleted outdated file ${fileName}`,
            changes: [{
              type: 'deleted' as const,
              path: `/files/${fileName}`,
              name: fileName
            }]
          };
        case 'project_updated':
          return {
            title: 'Updated project settings',
            description: 'Modified project configuration and metadata',
            changes: [{
              type: 'modified' as const,
              path: '/project/settings',
              name: 'Project Settings',
              oldContent: 'Previous settings',
              newContent: 'Updated settings'
            }]
          };
        case 'collaborator_added':
          return {
            title: `Added ${mockUsers[0].name} as collaborator`,
            description: `New team member added to the project`,
            changes: [{
              type: 'added' as const,
              path: '/project/team',
              name: 'Team Members'
            }]
          };
      }
    };

    const details = getCommitDetails(type);
    const date = new Date();
    date.setDate(date.getDate() - i); // Each commit is one day apart

    return {
      id: `commit-${i}`,
      type,
      timestamp: date.toISOString(),
      author,
      projectId: 'project-1',
      ...details,
      metadata: {
        fileId: type === 'file_upload' ? `file-${i}` : undefined,
        annotationId: type === 'annotation_added' ? `annotation-${i}` : undefined,
        collaboratorId: type === 'collaborator_added' ? `user-${i}` : undefined
      }
    };
  });
}; 