import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TimerContainer from './TimerContainer';
import LapsDisplay from './LapsDisplay';
import {Provider} from 'react-redux';
import { createStore } from 'redux';


const initialState = {
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
  laps: [],
  interval: ""
}



function reducer(state = initialState, action) {

  switch (action.type) {
      case "START_TIMER":
          if (state.milliseconds === 1000) {
              return {
                  ...state,
                  minutes: state.minutes,
                  seconds: state.seconds + 1,
                  milliseconds: state.milliseconds = 0
              }
          }
          else if (state.seconds === 60) {
              return {
                  ...state,
                  minutes: state.minutes + 1,
                  seconds: state.seconds = 0,
                  milliseconds: state.milliseconds
              }
          }
          else {
              return{
                  ...state,
                  minutes: state.minutes,
                  seconds: state.seconds,
                  milliseconds: state.milliseconds + 1,
                  // interval: action.int
              }
          }
      case "RESET_TIMER":
          return {
              ...state,
              minutes: state.minutes = 0,
              seconds: state.seconds = 0,
              milliseconds: state.milliseconds = 0
          }
      case "CHANGING_INTERVAL":
        console.log(action.int)
          return {
            ...state,
            interval: action.int
          }
      case "STOP_TIMER":
          return state
      case "LAP":
          return {
              ...state,
              laps: state.laps.concat(`${state.minutes}:${state.seconds}:${state.milliseconds}`)
          }
      default: {
          return state
      }
  }
}

const store = createStore(reducer);

// store.subscribe(() => {
//   console.log(store.getState())
// })

function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <TimerContainer />
        <LapsDisplay />
      </div>
    </Provider>
  );
}


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
