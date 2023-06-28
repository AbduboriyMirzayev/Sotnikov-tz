import { axiosInstance } from "utils/axios";

export const getPosts = () =>
  axiosInstance.get("/posts").then((res) => res.data);

export const getComments = () =>
  axiosInstance.get("/comments").then((res) => res.data);
