import axios from "axios";
const apiPath = "https://api.themoviedb.org/3/";

const fetch = async (url) => {
  const api_key = process.env.REACT_APP_API_KEY;
  try {
    const response = await axios.get(`${apiPath}${url}`, {
      params: {
        api_key: api_key,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export { fetch };
