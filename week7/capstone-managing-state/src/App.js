import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import Axios from 'axios';
import TitleBar from './TitleBar';
import AddMovie from './AddMovie';
import Navbar from './Navbar';
import Home from './Home';
import NowShowing from './NowShowing';
import Search from './Search';

function App() {

  const [movies, setMovies] = useState([])

  function getMovies() {
    Axios.get("/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  function addMovie(newMovie) {
    Axios.post("/movies", newMovie)
      .then(res => {
        setMovies(prevMovies => [res.data, ...prevMovies])
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function deleteMovie(movieId) {
    console.log(movieId)
    Axios.delete(`/movies/${movieId}`)
      .then(res => {
        setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function editMovie(updates, movieId) {
    Axios.put(`/movies/${movieId}`, updates)
      .then(res => {
        setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }




  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="App">
      <TitleBar />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies/search/nowShowing" 
            render={(props) => <NowShowing {...props} movies={movies} getMovies={getMovies} deleteMovie={deleteMovie} editMovie={editMovie} />} />
        <Route path="/movies/search" 
            render={(props) => <Search {...props} movies={movies} getMovies={getMovies} deleteMovie={deleteMovie} editMovie={editMovie} />} />
        <Route path="/movies/addMovie"
            render={(props) => <AddMovie {...props} movies={movies} deleteMovie={deleteMovie} addMovie={addMovie} getMovies={getMovies} editMovie={editMovie} />} />
      </Switch>
    </div>
  );
}

export default App;
