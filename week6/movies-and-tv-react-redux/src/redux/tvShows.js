
function tvShowsReducer(tvShows = ["Paw Patrol", "Dexter", "Fringe"], action) {
    switch(action.type) {
        case "ADD_TVSHOW":
            return [...tvShows, action.payload]
        case "DELETE_TVSHOW": {
            const updatedTvShows = tvShows.filter(tvShow => tvShow.toLowerCase() !== action.payload.toLowerCase())
            return updatedTvShows
        }
        case "GET_ALL_TVSHOWS":
            return tvShows
        default:
            return tvShows
    }
}

module.exports = tvShowsReducer
