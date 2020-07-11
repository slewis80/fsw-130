import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addTvShow, deleteTvShow} from './redux/tvShowsActions';
import Button from 'react-bootstrap/Button';
import AddContentForm from './AddContentForm';


function TVShows() {
    const tvShows = useSelector(state => state.tvShows)
    const dispatch = useDispatch()


    const tvShowsList = tvShows.map(tvShow => {
        return (
        <div className="listWrapper">
            <h4 style={{"display": "inline-block"}} id={tvShow} key={tvShow}>{tvShow}</h4>
            <Button id={tvShow} variant="danger" onClick={() => dispatch(deleteTvShow(tvShow))} size="sm">X</Button>
        </div>
    )
    })

    return (
        <div>
            <AddContentForm btnText="Add TV Show" submitEvent={addTvShow} name="tvShow" />
            <hr />
            {tvShowsList}
        </div>
    )
}

export default TVShows;