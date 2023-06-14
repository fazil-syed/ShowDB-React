import React from "react";
import { ImageCard } from "./ImageCard";

export const Feed = (props) => {
  const { currentPage, data, movieData } = props;
  return (
    <div>
      {currentPage === "Search" && (
        <h1 className="text-center font-sans text-6xl">TV Shows</h1>
      )}
      <div className="flex flex-wrap gap-20 mt-5 ml-14">
        {data !== null &&
          data.map((item) => (
            <ImageCard
              key={item !== null && item.id}
              item={item !== null && item}
            />
          ))}
      </div>
      {currentPage === "Search" && (
        <>
          <h1 className="text-center font-sans text-6xl">Movies</h1>
          <div className="flex flex-wrap gap-20 mt-5 ml-14">
            {movieData !== null &&
              movieData.map((item) => (
                <ImageCard
                  key={item !== null && item.id}
                  item={item !== null && item}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};
