
function moviesReducer(movies = [], action) {
    switch(action.type) {
        case "ADD_MOVIE":
            return [...movies, action.payload]
        case "DELETE_MOVIE": {
            const updatedMovies = movies.filter(movie => movie.toLowerCase() !== action.payload.toLowerCase())
            return updatedMovies
        }
        case "GET_ALL_MOVIES":
            return movies
        default:
            return movies
    }
}

module.exports = moviesReducer
