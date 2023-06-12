import React from "react";
import { ImageCard } from "./ImageCard";
import { useEffect, useState } from "react";
import axios from "axios";

export const TrendingMovies = (props) => {
  const { data, type } = props;

  return (
    <div className="flex flex-wrap gap-20 m-2">
      {data.map((item) => (
        <ImageCard key={item.id} item={item} />
      ))}
    </div>
  );
};
