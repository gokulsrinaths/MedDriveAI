import { Metadata } from 'next';
import CommitPage from './CommitPage';

// Mock data for static generation
const STATIC_COMMIT_HASHES = ['abc123', 'def456', 'ghi789', 'jkl012', 'mno345'];

export async function generateStaticParams() {
  return STATIC_COMMIT_HASHES.map((hash) => ({
    hash: hash,
  }));
}

export async function generateMetadata({ params }: { params: { hash: string } }): Promise<Metadata> {
  return {
    title: `Commit ${params.hash} - MedDrive`,
  };
}

export default function Page({ params }: { params: { hash: string } }) {
  return <CommitPage hash={params.hash} />;
} 