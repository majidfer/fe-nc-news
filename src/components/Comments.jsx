import { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteComment, getComments } from "../utils/api";

function Comments({ article_id }) {
  const [currComments, setCurrentComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(null);
  const [isSuccess, setSuccess] = useState(null);

  const { user } = useContext(UserContext);

  useEffect(() => {
    getComments(article_id).then((commentsFromApi) => {
      setCurrentComments(commentsFromApi.comments);
      setIsLoading(false);
    });
  }, [article_id]);

  const handleClick = (comment_id) => {
    deleteComment(comment_id)
      .then(() => {
        setSuccess(true);
      })
      .catch((err) => {
        setError(err.response.data.msg);
      });
  };

  if (isLoading) {
    return <p>... loading</p>;
  }

  if (isError) return <p className="error">{isError}</p>;
  if (isSuccess) return <p className="success">Your comment has been deleted</p>;

  return (
    <section>
      <ul>
        {currComments.map((comment) => {
          return (
            <li key={comment.comment_id} className="comment-card">
              <ul className="comment-info">
                <li>Author: {comment.author}</li>
                <li>Created at: {comment.created_at.slice(0, 10)}</li>
              </ul>
              <div className="comment-body">
                <p>{comment.body}</p>
              </div>
              <div className="comment-button">
                <button
                  hidden={user.username !== comment.author}
                  className="delete-comment-button"
                  onClick={() => handleClick(comment.comment_id)}
                >
                  Delete comment
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Comments;
