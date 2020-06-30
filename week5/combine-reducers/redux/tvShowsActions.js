function addTvShow(tvShow) {
    return {
        type: "ADD_TVSHOW",
        payload: tvShow
    }
}

function deleteTvShow(tvShow) {
    return {
        type: "DELETE_TVSHOW",
        payload: tvShow
    }
}

function getAllTvShows() {
    return {
        type: "GET_ALL_TVSHOWS"
    }
}


module.exports = {addTvShow, deleteTvShow, getAllTvShows}