import React from "react";

const {Provider, Consumer} = React.createContext();

class MoviesContextProvider extends React.Component {
    state ={
        movies: [
            "Onward",
            "Maleficent: Mistress of Evil",
            "Toy Story 4",
            "Sonic the Hedgehog",
            "Dolittle",
            "Birds of Prey",
            "Wonder Woman: Bloodlines",
            "Jumanji: The Next Level"
        ],
        newMovie: ""
    }

    handleChange = (e) => {
        e.preventDefault();

        let newMovieInput = document.getElementById("movieName").value;
        console.log(newMovieInput)

        this.setState({
            newMovie: newMovieInput
        })
    }

    handleClick = (e) => {
        e.preventDefault();

        this.setState({
            movies: this.state.movies.concat(this.state.newMovie)
        })
        
        document.getElementById("movieName").value = ""
    }

    render() {
        return(
            <Provider value={{movies: this.state.movies, handleClick: this.handleClick, handleChange: this.handleChange}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {MoviesContextProvider, Consumer as MoviesContextConsumer};