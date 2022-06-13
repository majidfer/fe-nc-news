import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";

function Articles() {
  const[currArticles, setArticles] = useState([]);
  const[isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi.articles);
      setIsLoading(false);
    })
  }, []);

  if (isLoading) return <p>... loading</p>
  return (
    <div className="articles">
      <ul>
        {currArticles.map((article) => {
          return (
            <li key={article.article_id} className="article-card">
              <article>
                <h2>{article.title}</h2>
                <div className="article-info">
                  <p>Created: {article.created_at.slice(0, 10)}</p>
                  <p>Topic: {article.topic}</p>
                  <p>Author: {article.author}</p>
                </div>
                <div className="article-info">
                  <p>{article.votes} {(article.votes > 1 ? `votes` : `vote`)}</p>
                  <p>{article.comment_count} {(article.comment_count > 1 ? `comments` : `comment`)}</p>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Articles;
