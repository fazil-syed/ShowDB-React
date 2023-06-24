import React from "react";
import { ImageCard } from "./ImageCard";

export const Feed = (props) => {
  const { currentPage, data, movieData, type } = props;

  return (
    <div className="flex flex-col ">
      {currentPage === "Search" && (
        <h1 className="text-center font-sans text-6xl">TV Shows</h1>
      )}
      <div className="flex flex-wrap gap-4 md:gap-8 mt-5 ml-4 md:ml-12">
        {data &&
          data.map((item) => (
            <ImageCard
              key={item && item.id}
              item={item && item}
              imageSize="w-full"
              isMovie={false}
              type={type}
            />
          ))}
      </div>
      {currentPage === "Search" && (
        <>
          <h1 className="text-center font-sans text-6xl">Movies</h1>
          <div className="flex flex-wrap gap-4 md:gap-8 mt-5 md:ml-14">
            {movieData &&
              movieData.map((item) => (
                <ImageCard
                  key={item && item.id}
                  item={item && item}
                  imageSize="w-full"
                  isMovie={true}
                  type="movie"
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};
