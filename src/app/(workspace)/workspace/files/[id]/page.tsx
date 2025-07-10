import { Metadata } from 'next';
import FilePage from './FilePage';

// Mock data for static generation
const STATIC_FILE_IDS = ['f1', 'f2', 'f3', 'f4', 'f5'];

export async function generateStaticParams() {
  return STATIC_FILE_IDS.map((id) => ({
    id: id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    title: `File ${params.id} - MedDrive`,
  };
}

export default function Page({ params }: { params: { id: string } }) {
  return <FilePage id={params.id} />;
} 