import { CommentType } from "../data/Comments/type";

export interface ICommentContext {
      comments: CommentType[];
      addComment: (comment: CommentType) => void;
      updateComment: (id: string, content: string) => void;
      deleteComment: (id: string) => void;
      voteComment: (id: string, delta: number) => void;
}