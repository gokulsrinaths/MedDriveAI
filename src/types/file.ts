export type File = {
  id: number;
  filename: string;
  original_name: string;
  content_type: string;
  size: number;
  project_id: number;
  storage_path: string;
  upload_date: string;
  status: 'Pending Analysis' | 'Analyzed' | 'Pending Review';
}; 