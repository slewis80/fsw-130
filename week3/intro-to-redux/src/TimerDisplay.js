import React from 'react';
import {connect} from 'react-redux'


function TimerDisplay(props) {
  return (
    <div className="timerDisplay">
        <span id="displayScreen" >{`${props.minutes}:${props.seconds}:${props.milliseconds}`}</span>
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

export default connect(mapStateToProps)(TimerDisplay);
