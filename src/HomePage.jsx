import React from "react";
import MovieSearch from "./MovieSearch";
import { Film } from "./features/Film";

const bestFilms = [
  "The Godfather",
  "The Godfather",
  "The Godfather",
  "The Godfather",
  "The Godfather",
  "The Godfather",
];

export const HomePage = () => {

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
