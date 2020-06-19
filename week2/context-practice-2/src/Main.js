import React from "react";
import {MoviesContextConsumer} from "./moviesContext";

function Main(props) {
    
    return(
        <MoviesContextConsumer>
            {context => (
               
                <div id="mainContent">
                    <h1>2020 New Movies</h1>
                    <form id="movieInput">
                        <input id="movieName" 
                            className="formInput" 
                            type="text" 
                            name="newMovie" 
                            value={context.newMovie}
                            onChange={context.handleChange}
                            placeholder="Add a movie...">
                        </input>
                        <button onClick={context.handleClick} className="formInput">Add To List</button>
                    </form>
                    <ul id="movieList">
                        {  
                            context.movies.map(movie => (
                            <li className="movieName" key={movie}>{movie}</li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </MoviesContextConsumer>
    )
}

export default Main;