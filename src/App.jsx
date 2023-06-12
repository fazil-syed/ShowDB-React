import { Feed } from "./components/Feed";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { TrendingShows } from "./components/TrendingShows";
import {
  fetchHome,
  fetchPopularTv,
  fetchTrendingMovies,
  fetchTrendingTv,
} from "./api/api";
import { TrendingMovies } from "./components/TrendingMovies";

function App() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState("Home");

  useEffect(() => {
    switch (currentPage) {
      case "Home":
        fetchHome().then((data) => {
          setData(data);
          console.log(data);
        });
        break;
      case "Trending Shows":
        fetchTrendingTv().then((data) => {
          setData(data);
        });
        break;
      case "Trending Movies":
        fetchTrendingMovies().then((data) => {
          setData(data);
        });
        break;
      case "Popular Shows":
        fetchPopularTv().then((data) => {
          setData(data);
        });
        break;
    }
  }, [currentPage]);
  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Routes>
        <Route path="/" element={<Feed data={data} />} />
        <Route path="/trending-tv" element={<Feed data={data} />} />
        <Route path="/trending-movie" element={<Feed data={data} />} />
        <Route path="/popular-tv" element={<Feed data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
