import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import contactsReducer from "./contactsReducer";

const store = createStore(contactsReducer)
store.subscribe(() => {
    console.log(store.getState())
})


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

