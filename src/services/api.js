import axios from "axios";

const api = axios.create({
  // baseURL: import.meta.env.API_BASE_URL,
  baseURL: "http://localhost:6500",
  withCredentials: true, // for cookie purpose
});

export default api;
// Interceptors are used to manage req,res before they are handled by then catch
// for adding token automatically to header if available
// api.interceptors.request.use((config)=>{
//     const
// })
