import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Movie from './Movie'

function Search(props) {

    // state management
    const [movies, setMovies] = useState([])

    const startingInput = ""
    const [input, setInput] = useState(startingInput)


    // functions
    function getMovies() {
        Axios.get("/movies")
            .then(res => setMovies(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    const filterByGenre = (e) => {
        const genre = e.target.value
        Axios.get(`/movies/search/genre?genre=${genre}`)
            .then(res => setMovies(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    const handleInputChange = (e) => {
        const {value} = e.target
        console.log(value)
        setInput(value)
    }

    const handleFilter = (e) => {
        let filter = e.target.value
        console.log(filter)
        if(filter === "title"){
            return filterByTitle()
        } else if(filter === "releaseYear"){
            return filterByYear()
        } else if(filter === "actor"){
            return filterByActor()
        }
    }

    const filterByTitle = (e) => {
        const title = input
        Axios.get(`/movies/search/title?title=${title}`)
        .then(res => setMovies(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }

    const filterByYear = (e) => {
        const year = input
        Axios.get(`/movies/search/releaseYear?releaseYear=${year}`)
        .then(res => setMovies(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }

    function capitalize(name) {  
        var names = name.split(' ');  
        var capitalizedNames = [];  
        names.forEach(name => {  
            capitalizedNames.push(name[0].toUpperCase() + name.slice(1, name.length));  
        });  
        return capitalizedNames.join(' ');  
    }  

    const filterByActor = (e) => {
        const actor = input
        const capitalizedActor = capitalize(actor)
        console.log(capitalizedActor)
        Axios.get(`/movies/search/actor?actor=${capitalizedActor}`)
            .then(res => setMovies(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }


    // main loading
    useEffect(() => {
        getMovies()
    }, [])


    // display mapping
    const moviesList = movies.map(movie => 
        <Movie key={movie._id} title={movie.title} img={movie.img} genre={movie.genre} releaseYear={movie.releaseYear} mainStars={movie.mainStars} _id={movie._id} deleteMovie={props.deleteMovie} editMovie={props.editMovie} addMovie={props.addMovie} movies={props.movies} getMovies={getMovies}
        />)


    return (
        <div id="searchPage">
            <form name="searchForm" id="searchForm" onSubmit={handleFilter}>
                <select onChange={filterByGenre}>
                    <option name="" value="">filter genre</option>
                    <option name="action" value="action">Action</option>
                    <option name="comedy" value="comedy">Comedy</option>
                    <option name="family" value="family">Family</option>
                    <option name="fantasy" value="fantasy">Fantasy</option>
                </select>
                <input onChange={handleInputChange} placeholder="search terms..."></input>
                <select onChange={handleFilter}>
                    <option name="" value="">filter by...</option>
                    <option name="title" value="title">Movie Name</option>
                    <option name="releaseYear" value="releaseYear">Release Year</option>
                    <option name="actor" value="actor">Actor</option>
                </select>
                <button onClick={getMovies}>Reset Results</button>
            </form>
        <div id="searchResults">
            {moviesList}
        </div>
        </div>
    )
}

export default Search