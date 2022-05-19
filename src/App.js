import {useEffect} from "react";

import './app.css'
import searchIcon from './search.svg'
//103e17aa

const API_URL = 'http://www.omdbapi.com?apikey=103e17aa';

const App = () => {

  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  }
  useEffect(() => {
    searchMovies('spiderman');
  },[]);
    return (
      <div className="app">
        <h1>Movie Finder</h1>
      </div>
    );
}

export default App;