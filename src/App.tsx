import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
import { CommentsProvider, useComments } from "./context/CommentsContext";

const CommentsList = () => {
  const { comments } = useComments();
  const topLevelComments = comments.filter(c => c.parentId === null);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Comment Section</h1>
      <CommentForm parentId={null} />
      {topLevelComments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

const App = () => {
  return (
    <CommentsProvider>
      <CommentsList />
    </CommentsProvider>
  );
}

export default App
