import axios from "axios";
const apiPath = "https://api.themoviedb.org/3/";
const api_key = "b3786a390467799c11abd24aaa2ea7b4";

const fetchHome = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/discover/movie",
      {
        params: {
          api_key: "b3786a390467799c11abd24aaa2ea7b4",
        },
      }
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      {
        params: {
          api_key: "b3786a390467799c11abd24aaa2ea7b4",
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const fetchTrendingTv = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      {
        params: {
          api_key: "b3786a390467799c11abd24aaa2ea7b4",
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const fetchPopularTv = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/tv/popular",
      {
        params: {
          api_key: "b3786a390467799c11abd24aaa2ea7b4",
        },
      }
    );
    console.log(response.data.results);

    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export { fetchHome, fetchTrendingTv, fetchTrendingMovies, fetchPopularTv };
