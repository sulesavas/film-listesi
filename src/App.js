import React, { useState } from 'react';
import MovieList from './components/MovieList';
import movies from './movies';
import './App.css';
import SearchBar from './components/SearchBar';


function App() {

  const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState(movies);

  const Search = () => {
    let newMovieList = movies.filter((value) => { return value.title.toLowerCase().includes(query.toLowerCase()) });
    setMovieList(newMovieList);

  }

  return (
    <div className="card container" >
      <h1 className="title">Film Listesi</h1>


      <div>
        <SearchBar query={query} setQuery={setQuery} Search={Search} />
        <MovieList movies={movieList} />
      </div>
    </div>
  );
}

export default App;
