import React from "react";
import { Film } from "./features/Film";
import { Button } from "@mui/material";

const bestFilms = [
  "The Godfather",
  "The Mummy",
  "The Godfather",
  "The Godfather",
  "The Godfather",
  "The Godfather",
];

export const HomePage = () => {
  const [showMovies, setShowMovies] = React.useState(true);
  const [movie, setMovie] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowMovies(false);
    setMovie(inputValue);
    setInputValue("");
  };

  return (
    <>
      <div className="input-wrapper">
        <form className="input-search" onSubmit={handleFormSubmit}>
          <input
            placeholder="Input film"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="movie-list">
        {showMovies ? (
          bestFilms.map((title, index) => {
            return <Film key={index} title={title} />;
          })
        ) : (
          <Film title={movie} />
        )}
        {!showMovies && (
          <Button onClick={() => setShowMovies(true)}>back</Button>
        )}
      </div>
    </>
  );
};
