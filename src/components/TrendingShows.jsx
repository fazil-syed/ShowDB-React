import React from "react";
import { ImageCard } from "./ImageCard";
import { useEffect, useState } from "react";
import axios from "axios";

export const TrendingShows = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
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
    <div className="flex flex-wrap gap-20 m-2">
      {data.map((item) => (
        <ImageCard key={item.id} item={item} />
      ))}
    </div>
  );
};
