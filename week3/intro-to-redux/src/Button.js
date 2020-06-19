import React from 'react';


function Button(props) {
  return (
    <div className="button">
        <span id={props.buttonType} value={props.buttonType} onClick={props.clickFunction}>{props.buttonType}</span>
    </div>
  );
}

export default Button;
