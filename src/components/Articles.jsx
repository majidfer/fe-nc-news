import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import { Link, useParams, useSearchParams } from "react-router-dom";
import SortArticle from "./SortArticle";

function Articles({ topicFromArticle }) {
  const [currArticles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFound, setIsFound] = useState(true);

  let { topic } = useParams();

  if (topicFromArticle) {
    topic = topicFromArticle;
  }
  
  const [searchParams] = useSearchParams();
  const sort_by = searchParams.get('sort_by');
  const order = searchParams.get("order");

  useEffect(() => {
    getArticles(topic, sort_by, order).then((articlesFromApi) => {
      setArticles(articlesFromApi.articles);
      articlesFromApi.articles.length === 0
        ? setIsFound(false)
        : setIsFound(true);
      setIsLoading(false);
    });
  }, [topic, sort_by, order]);

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
      <SortArticle />
      <div className="articles">
        <ul>
          {currArticles.map((article) => {
            return (
              <li key={article.article_id} className="article-card">
                <article>
                  <h2>
                    <Link to={`/articles/${article.article_id}`}>
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
