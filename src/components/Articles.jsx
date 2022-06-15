import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import { Link, useParams } from "react-router-dom";

function Articles({ topicFromArticle }) {
  const [currArticles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFound, setIsFound] = useState(true);

  let { topic } = useParams();

  if (topicFromArticle) {
    topic = topicFromArticle;
  }

  useEffect(() => {
    getArticles(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi.articles);
      articlesFromApi.articles.length === 0
        ? setIsFound(false)
        : setIsFound(true);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) {
    return <p>... loading</p>;
  }

  if (!isFound) {
    return (
      <p className="error">Oppss... some error occured with {topic} topic</p>
    );
  }

  return (
    <>
      <div className="articles">
        <ul>
          {currArticles.map((article) => {
            return (
              <li key={article.article_id} className="article-card">
                <article>
                  <h2>
                    <Link to={`/articles/${article.article_id}`} target="_top">
                      {article.title}
                    </Link>
                  </h2>
                  <div className="article-info">
                    <p>Created: {article.created_at.slice(0, 10)}</p>
                    <p>Topic: {article.topic}</p>
                    <p>Author: {article.author}</p>
                  </div>
                  <div className="article-info">
                    <p>
                      {article.votes} {article.votes > 1 ? `votes` : `vote`}
                    </p>
                    <p>
                      {article.comment_count}{" "}
                      {article.comment_count > 1 ? `comments` : `comment`}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Articles;
