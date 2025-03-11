import axios from "axios";
const baseURL = 'https://blood-blank-mern-app-server.vercel.app/'
// const baseURL = 'http://localhost:8001/api'
// const baseURL = 'https://blood-blank-mern-application-client.vercel.app/'
const API = axios.create({ baseURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;
