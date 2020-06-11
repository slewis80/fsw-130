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

        this.setState({
            newMovie: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();

        this.setState({
            movies: this.state.movies.concat(this.state.newMovie)
        }, () => this.setState({newMovie: ""})
        )
    }

    render() {
        return(
            <Provider value={{movies: this.state.movies, newMovie: this.state.newMovie, handleClick: this.handleClick, handleChange: this.handleChange}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {MoviesContextProvider, Consumer as MoviesContextConsumer};