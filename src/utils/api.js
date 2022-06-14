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
