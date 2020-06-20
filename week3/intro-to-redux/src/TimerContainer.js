import React from 'react';
import TimerDisplay from './TimerDisplay';
import Button from "./Button";
import { connect } from 'react-redux'
import { START_TIMER, changingInterval } from './actions'


function TimerContainer(props) {
  // console.log(props.interval)
  // eslint-disable-next-line
  const startTimer = () => {
    let int = setInterval(() => { props.dispatch(START_TIMER()) }, 1)
    props.dispatch(changingInterval(int))
    console.log("you've dispatched start timer")
  }

  // eslint-disable-next-line
  const stopTimer = (int) => {
      console.log(int)
      clearInterval(int)
      props.dispatch({ type: 'STOP_TIMER' })
      console.log("you've dispatched stop timer")
  }

  // eslint-disable-next-line
  const resetTimer = () => {
    props.dispatch({type: 'RESET_TIMER'})
    console.log("you've dispatched reset timer")
}
  
// eslint-disable-next-line
  const lap = () => {
      props.dispatch({ type: 'LAP' })
      console.log("you've dispatched lap")
  }

  return (
    <div className="timerContainer">
        <TimerDisplay />
        <Button buttonType={"Start"} clickFunction={() => startTimer()} />
        <Button buttonType={"Stop"} clickFunction={() => stopTimer(props.interval)} />
        <br />
        <Button buttonType={"Reset"} clickFunction={() => resetTimer()} />
        <Button buttonType={"Lap"} clickFunction={() => lap()} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      minutes: state.minutes,
      seconds: state.seconds,
      milliseconds: state.milliseconds,
      laps: state.laps,
      interval: state.interval
  }
}

export default connect(mapStateToProps)(TimerContainer);
