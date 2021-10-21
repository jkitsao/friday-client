import axios from "axios";
export const baseURL =
  window.location.hostname !== "localhost"
    ? "https://booapi.onrender.com"
    : "http://localhost:5000";

const api = axios.create({
  baseURL: baseURL,
});

export default api;
