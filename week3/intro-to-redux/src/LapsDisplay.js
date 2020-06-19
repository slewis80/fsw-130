import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
      minutes: state.minutes,
      seconds: state.seconds,
      milliseconds: state.milliseconds,
      laps: state.laps
  }
}


function LapsDisplay(props) {
  return (
    <div className="lapsDisplay">
      <h2>Laps...</h2>
      <ol>
        {props.laps.map((lap, index) => <li key={index}>{lap}</li>)}
      </ol>
    </div>
  );
}

export default connect(mapStateToProps)(LapsDisplay);
