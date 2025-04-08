export interface CommentType {
    id: string;
    parentId: string | null;
    author: string;
    content: string;
    timestamp: string;
    votes?: number; 
  }
  