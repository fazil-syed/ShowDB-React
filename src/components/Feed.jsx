import React from "react";
import { ImageCard } from "./ImageCard";

export const Feed = (props) => {
  const { currentPage, data, movieData, type } = props;

  return (
    <div className="flex ml-6 md:ml-0 flex-col gap-10">
      {currentPage === "Search" && (
        <h1 className="text-center font-sans mt-4 mb-0 text-6xl">TV Shows</h1>
      )}
      <div className="flex flex-wrap gap-4 md:gap-8  ml-4 md:ml-12">
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
        <div className="">
          <h1 className="text-center font-sans mb-10 -mt-3   text-6xl">
            Movies
          </h1>
          <div className="flex flex-wrap gap-4 md:gap-8 ml-4 md:ml-12">
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
        </div>
      )}
    </div>
  );
};
