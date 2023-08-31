import Axios from "axios";

let axios = Axios.create({
  baseURL: "http://localhost:4001",
});

export default axios;
