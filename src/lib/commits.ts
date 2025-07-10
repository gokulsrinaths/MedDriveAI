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
      id: "1",
      title: "Updated patient diagnosis",
      description: "Updated patient diagnosis section",
      type: "file_upload",
      timestamp: '2024-02-15T10:30:00Z',
      author: {
        id: "1",
        name: "Dr. Sarah Chen",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
      },
      projectId: projectId.toString(),
      changes: [{
        type: "modified",
        path: "/files/diagnosis.md",
        name: "diagnosis.md",
        oldContent: "Previous diagnosis",
        newContent: "Updated diagnosis"
      }]
    },
    {
      id: "2",
      title: "Treatment recommendations",
      description: "Added treatment recommendations",
      type: "file_upload",
      timestamp: '2024-02-14T15:45:00Z',
      author: {
        id: "2",
        name: "Dr. Michael Lee",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
      },
      projectId: projectId.toString(),
      changes: [{
        type: "added",
        path: "/files/treatment.md",
        name: "treatment.md"
      }]
    },
    {
      id: "3",
      title: "AI Analysis",
      description: "AI analysis complete",
      type: "file_upload",
      timestamp: '2024-02-13T09:15:00Z',
      author: {
        id: "3",
        name: "AI System",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AI"
      },
      projectId: projectId.toString(),
      changes: [{
        type: "added",
        path: "/files/ai-analysis.md",
        name: "ai-analysis.md"
      }]
    }
  ];
} 