import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-feri.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return ncNewsApi.get("/articles", { params: { topic } }).then(({ data }) => {
    return data;
  });
};

export const getTopics = () => {
  return ncNewsApi.get("/topics").then(({ data }) => {
    return data;
  });
};

export const getArticle = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const patchArticle = (article_id, inc_votes) => {
  return ncNewsApi
    .patch(`/articles/${article_id}`, { inc_votes })
    .then((res) => {
      return res.data;
    });
};

export const getComments = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};
