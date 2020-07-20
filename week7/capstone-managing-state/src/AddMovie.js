import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Movie from './Movie'
import AddMovieForm from './AddMovieForm'

function AddMovie(props) {

    // state management
    const [movies, setMovies] = useState([])


    // functions
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



    // main loading
    useEffect(() => {
        getMovies()
    }, [])


    // display mapping
    const moviesList = movies.map(movie => 
        <Movie key={movie._id} title={movie.title} img={movie.img} genre={movie.genre} releaseYear={movie.releaseYear} mainStars={movie.mainStars} _id={movie._id} deleteMovie={props.deleteMovie} editMovie={props.editMovie} movies={props.movies} getMovies={getMovies} editMovie={props.editMovie}
        />).reverse()


    return (
        <div id="addMoviePage">
            <AddMovieForm    
                addMovie={addMovie} />
        <div id="searchResults">
            {moviesList}
        </div>
        </div>
    )
}

export default AddMovie