/** @format */


import { useState } from "react";
import MovieList from "./components/MovieList";
import "./App.css";
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";



const App= ({movieList,setMovieList})=> {
 
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);

  const handleTitle = value => setSearch(value);
  const handleRate = value => setRating(value);

  const movieAdd = (id, title, description, posterUrl, year, rate) =>
    setMovieList([
      ...movieList,
      { id, title, description, posterUrl, year, rate },
    ]);

  return (
    <div>
   
      <h1>Movie App</h1>
      
      <Filter handleTitle={handleTitle} handleRate={handleRate}></Filter>
      <MovieList
        movieList={movieList.filter(
          el =>
            el.title
              .toUpperCase()
              .trim()
              .includes(search.trim().toUpperCase()) && el.rate >= rating
        )}
      ></MovieList>
      <AddMovie movieAdd={movieAdd}></AddMovie>
     
    x
    </div>
  );
}
export default App;
