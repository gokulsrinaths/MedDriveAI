export type BoundingBox = {
  x: number
  y: number
  width: number
  height: number
  label: string
}

export type Annotation = {
  id: number;
  project_id: number;
  file_id: number;
  content: string;
  created_at: string;
  updated_at: string;
  author_name: string;
}; 