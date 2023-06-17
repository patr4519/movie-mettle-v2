// `http://www.omdbapi.com/?t=q&apikey=9fc0fef8`

import React from "react";
import MovieSearch from "./MovieSearch";
import { Film } from "./features/Film";
import Header from "./features/Header";

function App() {
  const bestFilms = ["The Godfather", "The Dark Knight", "Fight Club", "The Godfather", "The Dark Knight", "Fight Club", "The Godfather", "The Dark Knight", "Fight Club", "The Godfather"];

  return (
    <div className="wrapper-app">
      <div className="app">
        <Header />
        <MovieSearch />
        <div className="movie-list">
          {bestFilms.map((title, index) => {
            return <Film key={index} title={title} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
