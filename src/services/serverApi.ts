import axios from "axios";

const serverApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    language: "pt-BR",
  },
});

serverApi.defaults.headers["Authorization"] = `Bearer ${process.env.THEMOVIE_JWT}`;
serverApi.defaults.headers["Content-Type"] = "application/json;charset=utf-8";

export { serverApi };
