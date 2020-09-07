import axios from "axios";

export const apiKey = "AIzaSyCFbWy5NekissLObUpv72hlxk1hnwjUDSI";
export const playlistId = "UUEiuMdaIdiKhlJe9NFygVUw";

export const api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
