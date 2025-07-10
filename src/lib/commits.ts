import { Commit } from '@/types/commit';

const DEMO_AUTHORS = [
  'Dr. Sarah Chen',
  'Dr. Michael Lee',
  'Dr. James Wilson',
  'Dr. Emily Brown',
  'AI System'
];

const generateDemoAuthorName = () => {
  return DEMO_AUTHORS[Math.floor(Math.random() * DEMO_AUTHORS.length)];
};

export async function createCommit(projectId: number, fileId: number, message: string): Promise<void> {
  // In a real app, this would save to a database
  console.log('Creating commit:', { projectId, fileId, message });
}

export async function getCommits(projectId: number, fileId: number): Promise<Commit[]> {
  // Return demo commits
  return [
    {
      id: 1,
      project_id: projectId,
      file_id: fileId,
      message: 'Updated patient diagnosis section',
      author: 'Dr. Sarah Chen',
      created_at: '2024-02-15T10:30:00Z'
    },
    {
      id: 2,
      project_id: projectId,
      file_id: fileId,
      message: 'Added treatment recommendations',
      author: 'Dr. Michael Lee',
      created_at: '2024-02-14T15:45:00Z'
    },
    {
      id: 3,
      project_id: projectId,
      file_id: fileId,
      message: 'AI analysis complete',
      author: 'AI System',
      created_at: '2024-02-13T09:15:00Z'
    }
  ];
} 