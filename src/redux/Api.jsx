
import axios from "axios";

const Api = axios.create({
  baseURL: "https://fakestoreapi.com", // ✅ base URL for all API requests
});

export default Api;
