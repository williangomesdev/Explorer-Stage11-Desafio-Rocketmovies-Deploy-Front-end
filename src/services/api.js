import axios from "axios";

export const api = axios.create({
  baseURL: "https://rmovies-api.herokuapp.com",
});
