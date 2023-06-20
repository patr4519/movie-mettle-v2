import React from "react";
import { useSelector } from "react-redux";
import { FavFilm } from "./FavFilm";
import EmptyFavorites from "./EmptyFavorites";
import { selectUser } from "../features/api/userSlice";
import { Film } from "./Film";

export const Favorites = () => {
  const favorites = useSelector(selectUser)?.favorites;

  if (!favorites) return <>LogIn First</>
  if (!favorites.length) return <EmptyFavorites />

  return (
    <div className="movie-list">
      <h2>Favorites</h2>
      {favorites.map((movie) => {
        return <Film key={movie} title={movie} />;
      })}
    </div>
  );
};
