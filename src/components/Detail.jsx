import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ImageCard } from "./ImageCard";
import { fetch } from "../api/api";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`movie/${id}`).then((data) => setMovie(data));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { title, overview, poster_path, videos } = movie;

  // Get the trailer key from the videos object
  const trailer = videos.results.find((video) => video.type === "Trailer");
  const trailerKey = trailer ? trailer.key : null;
  const trailerUrl = trailerKey
    ? `https://www.youtube.com/embed/${trailerKey}`
    : null;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-start md:mb-8">
        <div className="md:w-1/3">
          <ImageCard key={movie.id} item={movie} />
        </div>
        <div className="md:w-2/3 md:ml-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-0">{title}</h2>
          <p className="mb-4 mt-0">{overview}</p>
        </div>
      </div>
      {trailerUrl && (
        <div className="relative aspect-w-16 aspect-h-9">
          <iframe
            src={trailerUrl}
            title={`${title} Trailer`}
            className="absolute top-0 left-0 w-full h-full"
            style={{ zIndex: 1 }}
            allowFullScreen
          />
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
            style={{ zIndex: 0 }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailPage;
