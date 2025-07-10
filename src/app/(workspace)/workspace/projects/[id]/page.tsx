import { Metadata } from 'next';
import ProjectPage from './ProjectPage';

// Mock data for static generation
const STATIC_PROJECT_IDS = ['1', '2', '3', '4', '5'];

export async function generateStaticParams() {
  return STATIC_PROJECT_IDS.map((id) => ({
    id: id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    title: `Project ${params.id} - MedDrive`,
  };
}

export default function Page({ params }: { params: { id: string } }) {
  return <ProjectPage id={params.id} />;
} 