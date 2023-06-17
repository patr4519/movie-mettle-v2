import React from "react";
import MovieSearch from "./MovieSearch";
import { Film } from "./features/Film";

export const HomePage = () => {
  const bestFilms = [
    "The Godfather",
    "The Dark Knight",
    "Fight Club",
    "The Godfather",
    "The Dark Knight",
    "Fight Club",
    "The Godfather",
    "The Dark Knight",
    "Fight Club",
    "The Godfather",
  ];

  return (
    <>
      <MovieSearch />
      <div className="movie-list">
        {bestFilms.map((title, index) => {
          return <Film key={index} title={title} />;
        })}
      </div>
    </>
  );
};
