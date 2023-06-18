import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../features/api/favoritesSlice";
import { Film } from "./Film";

export const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className="movie-list">
      {favorites.map((movie) => {
        return <Film key={movie.Title} title={movie.Title} />;
      })}
    </div>
  );
};
