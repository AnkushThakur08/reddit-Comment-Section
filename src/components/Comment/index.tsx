import React, { useState } from "react";
import { useComments } from "../../context/CommentsContext";
import CommentForm from "../CommentForm";
import { ICommentProps } from "./type";


const Comment: React.FC<ICommentProps> = ({comment}) => {
  const [showReply, setShowReply] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  const { comments, updateComment, deleteComment, voteComment } = useComments();

  const handleEdit = () => {
    updateComment(comment.id, editContent);
    setIsEditing(false);
  };

  const replies = comments.filter((c) => c.parentId === comment.id);

  return (
    <div className="ml-4 border-l pl-4 mt-2">
      <div className="bg-gray-100 p-3 rounded relative">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-sm font-semibold">{comment.author}</div>
            <div className="text-xs text-gray-500">
              {new Date(comment.timestamp).toLocaleString()}
            </div>
          </div>
          <div className="text-xs space-x-2">
            <button
              className="text-blue-500 cursor-pointer"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
            <button
              className="text-red-500 cursor-pointer"
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </button>
          </div>
        </div>

        {isEditing ? (
          <div>
            <textarea
              className="w-full mt-2 p-2 border rounded"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />
            <button
              className="mt-2 px-3 py-1 text-sm bg-green-600 text-white rounded"
              onClick={handleEdit}
            >
              Save
            </button>
          </div>
        ) : (
          <p className="mt-2">{comment.content}</p>
        )}

        <div className="flex items-center gap-2 mt-2 text-xs">
          <button
            className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
            onClick={() => voteComment(comment.id, 1)}
          >
            👍
          </button>
          <span>{comment.votes ?? 0}</span>
          <button
            className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
            onClick={() => voteComment(comment.id, -1)}
          >
            👎
          </button>
          <button
            className="text-blue-600 ml-4"
            onClick={() => setShowReply(!showReply)}
          >
            {showReply ? "Cancel" : "Reply"}
          </button>
          {replies.length > 0 && (
            <button
              className="text-gray-500 ml-4"
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? "Show Replies" : "Hide Replies"} ({replies.length})
            </button>
          )}
        </div>
      </div>

      {showReply && <CommentForm parentId={comment.id} />}

      {!collapsed &&
        replies.map((reply) => <Comment key={reply.id} comment={reply} />)}
    </div>
  );
}

export default Comment
