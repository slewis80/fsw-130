import React, {useState, useEffect} from 'react'
import Movie from './Movie'
import Axios from 'axios'

function NowShowing(props) {

    const [nowShowing, setNowShowing] = useState([])

    function getNowShowing() {
        Axios.get("/movies/search/nowShowing?nowShowing=true")
            .then(res => setNowShowing(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    useEffect(() => {
        getNowShowing()
    }, [])

    const moviesNowShowing = nowShowing.map(movie => 
        <Movie key={movie._id} title={movie.title} img={movie.img} genre={movie.genre} releaseYear={movie.releaseYear} mainStars={movie.mainStars} _id={movie._id} deleteMovie={props.deleteMovie} editMovie={props.editMovie} addMovie={props.addMovie} movies={props.movies} getMovies={getNowShowing}
    />)


    return (
        <div id="nowShowingPage">
            <h1 id="nowShowingTitle">Deals of the Month...</h1>
            {moviesNowShowing}
        </div>
    )
}

export default NowShowing