import { useState } from "react";
import { useGetFilmQuery } from "./features/api/apiSlice";
import { Film } from "./features/Film";

const MovieSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [movie, setMovie] = useState("");

  const { data: movieData, isFetching, isError } = useGetFilmQuery(movie);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setMovie(inputValue);
  };

  if (isFetching) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className="input-wrapper">
      <form className="input-search" onSubmit={handleFormSubmit}>
        <input placeholder="Input film" type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      {movieData.Title && (<Film title={movie} />)}
    </div>
  );
};

export default MovieSearch;
