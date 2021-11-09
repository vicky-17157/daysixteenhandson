import React from 'react';
import './run.css'
function Noruns() {
	return <h1 className="missed-runs">IT'S A DOT BALL!</h1>; }
function Runsmade(props) {
	return ( <div><h1 className="made-runs">WOW! WATTA A SHOT!</h1>
            <h2>The number of runs scored is {props.runs}</h2> </div>
    ); 
}
function Run(props) {
  const isRun = props.isRun;
  if (isRun) {
    return <Runsmade/>; }
  return <Noruns/>; 
}

export default Run;