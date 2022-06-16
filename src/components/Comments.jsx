import { useEffect, useState } from "react";
import { getComments } from "../utils/api";

function Comments({ article_id }) {
  const [currComments, setCurrentComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(article_id).then((commentsFromApi) => {
      setCurrentComments(commentsFromApi.comments);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>... loading</p>;
  }

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
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Comments;
