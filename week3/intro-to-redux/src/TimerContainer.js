import React from 'react';
import TimerDisplay from './TimerDisplay';
import Button from "./Button";
import { connect } from 'react-redux'


function TimerContainer(dispatch) {

  // eslint-disable-next-line
  const startTimer = (props) => {
    setInterval(() => { props.dispatch({ type: 'START_TIMER' }) }, 1)
    console.log("you've dispatched start timer")
  }
  
  // eslint-disable-next-line
  const stopTimer = () => {
      let int = setInterval
      clearInterval(int)
      this.props.dispatch({ type: 'STOP_TIMER' })
      console.log("you've dispatched stop timer")
  }

  // eslint-disable-next-line
  const resetTimer = (props) => {
    this.props.dispatch({type: 'RESET_TIMER'})
    console.log("you've dispatched reset timer")
}
  
// eslint-disable-next-line
  const lap = (props) => {
      this.props.dispatch({ type: 'LAP' })
      console.log("you've dispatched lap")
  }

  return (
    <div className="timerContainer">
        <TimerDisplay value={"00:00:00"}/>
        <Button buttonType={"Start"} clickFunction={() => startTimer()} />
        <Button buttonType={"Stop"} clickFunction={() => stopTimer()} />
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
      laps: state.laps
  }
}

export default connect(mapStateToProps)(TimerContainer);
