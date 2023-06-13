import Axios from "axios";

let axios = Axios.create({
  baseURL: "http://localhost:4001",
});

axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  function (response) {
    const newCookie = response.headers["access_token"];
    if (newCookie) {
      localStorage.setItem("user", JSON.stringify(response.data.username));
    }
    return response;
  },
  function (error) {
    console.log("Here!", error);
    if (error.response.status === 401) {
      localStorage.removeItem("user");
    }
    return Promise.reject(error);
  }
);

export default axios;
