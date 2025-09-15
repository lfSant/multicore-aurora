import axios from "axios";

export const dy23HttpClient = axios.create({
  baseURL: "https://dy23.core.svc",
  timeout: 8000
});
