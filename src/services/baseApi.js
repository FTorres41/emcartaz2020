import axios from "axios";

const api = axios.create({
  baseURL: "http://www.emcartaz.net/wp-json/wp/v2",
});

export default api;
