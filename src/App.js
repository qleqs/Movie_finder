import {useEffect,useState} from "react";
import MovieCard from "./MovieCard";
import './app.css'
import searchIcon from './search.svg'
//103e17aa

const API_URL = 'http://www.omdbapi.com?apikey=103e17aa';

const movie1 =
  {
    "Title": "Superman, Spiderman or Batman",
    "Year": "2011",
    "imdbID": "tt2084949",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}


const App = () => {
  const[movies, setMovies] = useState([]);
  const [SearchTerm, SetSearchTerm] = useState('')
  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('spiderman');
  },[]);
    return (
      <div className="app">
        <h1>MoviePalace</h1>

        <div className="search">
          <input
            placeholder="search for movies"
            value={SearchTerm}
            onChange={(e) =>SetSearchTerm(e.target.value)}
          />
          <img src={searchIcon}
          alt='search'
          onClick={() =>searchMovies(SearchTerm)}
          />
        </div>
        {
          movies?.length > 0
            ?(
              <div className="container">
              {movies.map((movie) => (
                <MovieCard movie = {movie}/>
              ))}
              </div>
            ) :(
              <div children="empty">
                <h2>No Movies Found</h2>
              </div>
            )
        }
          
      </div>
    );
}

export default App;