import React, { useState } from 'react';
import { useComments } from '../../context/CommentsContext';
import { CommentType } from '../../data/Comments/type';
import { v4 as uuidv4 } from 'uuid';
import { ICommentFormProps } from './type';

const CommentForm: React.FC<ICommentFormProps> = ({parentId}) => {
  const { addComment } = useComments();
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newComment: CommentType = {
      id: uuidv4(),
      parentId,
      author: 'Anonymous',
      content: text,
      timestamp: new Date().toISOString(),
    };

    addComment(newComment);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded"
        rows={3}
        placeholder="Write a comment..."
      />
      <button type="submit" className="mt-2 px-4 py-1 bg-blue-600 text-white rounded">Post</button>
    </form>
  );
}

export default CommentForm