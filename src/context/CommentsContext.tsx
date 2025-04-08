import React, { createContext, useContext, useState } from 'react';
import { CommentType } from '../data/Comments/type';
import { initialComments } from '../data/Comments';
import { ICommentContext } from './type';


const CommentsContext = createContext<ICommentContext | undefined>(undefined);

export const useComments = () => {
  const context = useContext(CommentsContext);
  if (!context) throw new Error('useComments must be used within CommentsProvider');
  return context;
};

export const CommentsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [comments, setComments] = useState<CommentType[]>(initialComments);

  const addComment = (comment: CommentType) => {
    setComments((prev) => [...prev, comment]);
  };

  const updateComment = (id: string, content: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, content } : c))
    );
  };
  
  const deleteComment = (id: string) => {
    setComments((prev) => prev.filter((c) => c.id !== id && c.parentId !== id));
  };
  
  const voteComment = (id: string, delta: number) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, votes: (c.votes || 0) + delta } : c))
    );
  };

  return (
    <CommentsContext.Provider value={{ comments, addComment, updateComment, deleteComment, voteComment }}>
      {children}
    </CommentsContext.Provider>
  );
};
