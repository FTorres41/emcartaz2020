import axios from "axios";

const acfApi = axios.create({
  baseURL: "http://www.emcartaz.net/wp-json/acf/v3",
});

export default acfApi;
