import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../utils/api";
import Articles from "./Articles";

function Article() {
  const [currArticle, setArticle] = useState({ created_at: "0000-00-00" });

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setError] = useState(null);

  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi.article);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, [article_id]);

  if (isError) {
    return <p className="error">Oopps.. some error occured!!</p>;
  }

  if (isLoading) {
    return <p>... loading</p>;
  }

  return (
    <>
      <div className="article">
        <article>
          <h2>{currArticle.title}</h2>
          <div className="article-info">
            <p>in {currArticle.topic}</p>
            <p>created at {currArticle.created_at.slice(0, 10)}</p>
            <p>by {currArticle.author}</p>
          </div>
          <p className="article-body">{currArticle.body}</p>
          <div className="article-info">
            <p>{currArticle.votes} votes</p>
            <p>{currArticle.comment_count} comments</p>
          </div>
        </article>
      </div>
      <h3>Related articles:</h3>
      <Articles topicFromArticle={currArticle.topic} />
    </>
  );
}

export default Article;
