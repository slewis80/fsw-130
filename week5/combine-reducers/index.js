const store = require('./redux/index')
const {addMovie, deleteMovie, getAllMovies} = require('./redux/moviesActions')
const {addTvShow, deleteTvShow, getAllTvShows} = require('./redux/tvShowsActions')

store.dispatch(addMovie("The Matrix"))
store.dispatch(addMovie("Toy Story"))
store.dispatch(addMovie("The Secret Life of Pets"))
store.dispatch(addMovie("Cars 2"))

store.dispatch(addTvShow("The Simpsons"))
store.dispatch(addTvShow("Fringe"))
store.dispatch(addTvShow("Lost"))
store.dispatch(addTvShow("Dexter"))

store.dispatch(deleteMovie("The Matrix"))

store.dispatch(deleteTvShow("The Simpsons"))

store.dispatch(getAllMovies())

store.dispatch(getAllTvShows())
