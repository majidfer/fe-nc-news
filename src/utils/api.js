import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: "https://nc-news-feri.herokuapp.com/api",
})

export const getArticles = () => {
    return ncNewsApi.get("/articles").then(({data}) => {
        return data;
    })
}