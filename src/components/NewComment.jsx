import { useState } from "react";
import { postComment } from "../utils/api";

function NewComment({ article_id }) {
  const [userName, setUserName] = useState("");
  const [commentBody, setCommentBody] = useState("");
  const [isError, setError] = useState(null);
  const [isSuccess, setSuccess] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, userName, commentBody)
      .then((newComment) => {
        setSuccess(true);
      })
      .catch((err) => {
        setError(err.response.data.msg);
      });

    setUserName("");
    setCommentBody("");
  };

  if (isError) return <p className="error">{isError}</p>;
  if (isSuccess) return <p className="success">Thank you for your comment.</p>

  return (
    <>
      <div className="comment-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <br />
          <input required
            type="text"
            name="username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <br />
          <label htmlFor="comment-body">Comment:</label>
          <br />
          <textarea required
            type="text"
            name="comment-body"
            value={commentBody}
            onChange={(e) => {
              setCommentBody(e.target.value);
            }}
          />
          <br />
          <button type="submit">Leave a comment</button>
        </form>
      </div>
    </>
  );
}

export default NewComment;
