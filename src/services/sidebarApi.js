import axios from "axios";

const sidebarApi = axios.create({
  baseURL: "http://www.emcartaz.net/wp-json",
});

export default sidebarApi;
