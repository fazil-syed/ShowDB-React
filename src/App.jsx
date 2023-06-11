import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { TrendingShows } from "./components/TrendingShows";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/tv/popular",
        {
          params: {
            api_key: "b3786a390467799c11abd24aaa2ea7b4",
          },
        }
      );

      setData(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/trending" element={<TrendingShows />} />
      </Routes>
    </div>
  );
}

export default App;
