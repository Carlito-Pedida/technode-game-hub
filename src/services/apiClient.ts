import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c2fa6859c6b741809a677ce7f7f4bf6b"
  }
});
