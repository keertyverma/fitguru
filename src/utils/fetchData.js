import axios from "axios";

export const exerciseOptions = {
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
  },
};

const fetchData = (url, options) => {
  return axios.get(url, options);
};

export { fetchData };
