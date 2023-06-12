import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  fetch,
  fetchPopularTv,
  fetchTrendingMovies,
  fetchTrendingTv,
} from "./api/api";
import { Feed } from "./components/Feed";
import { Navbar } from "./components/Navbar";

function App() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState("Home");

  useEffect(() => {
    switch (currentPage) {
      case "Home":
        fetch("discover/movie").then((data) => {
          setData(data);
        });

        break;
      case "Trending Shows":
        fetch("trending/tv/day").then((data) => {
          setData(data);
        });
        break;
      case "Trending Movies":
        fetch("trending/movie/day").then((data) => {
          setData(data);
        });
        break;
      case "Popular Shows":
        fetch("tv/popular").then((data) => {
          setData(data);
        });
        break;
      case "Popular Movies":
        fetch("movie/popular").then((data) => {
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
        <Route path="/popular-movie" element={<Feed data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
