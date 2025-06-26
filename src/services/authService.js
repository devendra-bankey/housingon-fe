import api from "./api";

const identifyMe = async () => {
  const response = await api.get("/user/me");
  console.log(response.data);
  return response;
};
const loginUser = async (data) => {
  const response = await api.post("/user/login", data);
  console.log(import.meta.env.VITE_API_BASE_URL);
  return response.data;
};
const logoutUser = async () => {
  const response = await api.post("/user/logout");
  return response.data;
};

export { identifyMe, loginUser, logoutUser };
