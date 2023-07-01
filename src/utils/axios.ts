import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://www.cbr-xml-daily.ru/daily_json.js?" + Date.now(),
});
