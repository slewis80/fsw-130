function addMovie(movie) {
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}

function deleteMovie(movie) {
    return {
        type: "DELETE_MOVIE",
        payload: movie
    }
}

function getAllMovies() {
    return {
        type: "GET_ALL_MOVIES"
    }
}

module.exports = {addMovie, deleteMovie, getAllMovies}