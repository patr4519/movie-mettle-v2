// `http://www.omdbapi.com/?t=q&apikey=9fc0fef8`

import React from "react";
import MovieSearch from "./MovieSearch";
import { Film } from "./features/Film";
import Header from "./features/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
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
    <Router>
      <div className="wrapper-app">
        <div className="app">
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <MovieSearch />
                  <div className="movie-list">
                    {bestFilms.map((title, index) => {
                      return <Film key={index} title={title} />;
                    })}
                  </div>
                </>
              }
            />
            <Route path="/favorites" element={<div>favorites</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
