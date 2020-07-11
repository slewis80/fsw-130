import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addMovie, deleteMovie} from './redux/moviesActions';
import AddContentForm from './AddContentForm';
import Button from 'react-bootstrap/Button'


function Movies(props) {
    const movies = useSelector(state => state.movies)
    const dispatch = useDispatch()


    const moviesList = movies.map(movie => {
        return (
        <div className="listWrapper">
            <h4 style={{"display": "inline-block"}} id={movie} key={movie}>{movie}</h4>
            <Button id={movie} variant="danger" onClick={() => dispatch(deleteMovie(movie))} size="sm">X</Button>
        </div>
    )
    })

    return (
        <div>
            <AddContentForm btnText="Add Movie" submitEvent={addMovie} name="movie" />
            <hr />
            {moviesList}
        </div>
    )
}

export default Movies;