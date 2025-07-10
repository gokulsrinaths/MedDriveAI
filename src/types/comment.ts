interface User {
  name: string;
}

export interface Comment {
  id: string;
  content: string;
  user: User;
  created_at: string;
}

export interface CommentThread extends Comment {
  replies: CommentThread[];
} 