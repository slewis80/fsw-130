import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import moviesReducer from './redux/movies';
import tvshowsReducer from './redux/tvShows';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const rootReducer = combineReducers({
  movies: moviesReducer,
  tvShows: tvshowsReducer
})

const store = createStore(rootReducer)
store.subscribe(()=>{
  console.log(store.getState())
})


ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

