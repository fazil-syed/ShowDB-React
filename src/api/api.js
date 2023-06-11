const apiPath = "https://api.themoviedb.org/3/";
const api_key = "b3786a390467799c11abd24aaa2ea7b4";

const home = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/tv/popular",
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
const Trending = async () => {
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
