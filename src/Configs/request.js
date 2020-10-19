import axios from "axios";

export const createRequest = (customConfig) => {
  const config = {};
  const token = localStorage.getItem("token");

  if (token) {
    config.headers = {
      Authorization: "Bearer " + token,
    };
  }

  return axios({ ...customConfig, ...config });
};
