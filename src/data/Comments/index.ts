import { CommentType } from "./type";

export const initialComments: CommentType[] = [
  {
    id: '1',
    parentId: null,
    author: 'Alice',
    content: 'This is the first comment!',
    timestamp: new Date().toISOString(),
    votes: 2,
  },
  {
    id: '2',
    parentId: '1',
    author: 'Bob',
    content: 'Replying to first comment',
    timestamp: new Date().toISOString(),
    votes: 1,
  },
  {
    id: '3',
    parentId: null,
    author: 'Charlie',
    content: 'Another top-level comment',
    timestamp: new Date().toISOString(),
    votes: 3,
  },
];
