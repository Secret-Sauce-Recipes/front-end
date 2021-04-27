import axios from "axios";

const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    baseURL: "https://secret-sauce-recipe.herokuapp.com/",
    headers: {
      authorization: token,
    },
  });
};

export default axiosWithAuth;
