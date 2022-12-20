import axios from "axios";
const instance = axios.create({
  baseURL: "http://192.168.0.154:9999",
  params: {},
});
export default instance;
