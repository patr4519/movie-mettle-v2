import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../features/api/favoritesSlice";
import { FavFilm } from "./FavFilm";
import EmptyFavorites from "./EmptyFavorites";

export const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  if (!favorites.length) return <EmptyFavorites />

  return (
    <div className="movie-list">
      {favorites.map((movie) => {
        return <FavFilm key={movie.Title} title={movie.Title} />;
      })}
    </div>
  );
};
