/** @format */

import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css"

const MovieList = ({ movieList }) => {
  return (
    <div className="movies">
      {movieList.map(el => <MovieCard movieCard={el} />
      )}
    </div>
  );
};

export default MovieList;
