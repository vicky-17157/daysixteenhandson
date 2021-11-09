import React from 'react';
import ReactDOM from 'react-dom';
import StateData from './components/apptableState';
//import Samp from './components/table';
import './index.css';
//import App from './App';
//import Table from './components/mytable';
//import Goal from './components/goal';
//import Run from './components/run';
//import Clock from './components/clock';
//import Football from './components/football';
import reportWebVitals from './reportWebVitals';



//ReactDOM.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>,
  //document.getElementById('root')
//);

//ReactDOM.render(
  //<React.StrictMode>
    //<Table />
  //</React.StrictMode>,
  //document.getElementById('root')
//);

//ReactDOM.render(
  //<React.StrictMode>
    //<Goal isGoal={true} />
  //</React.StrictMode>,
  //document.getElementById('root')
//);

//ReactDOM.render(
  //<React.StrictMode>
    //<Run isRun={true} runs="2" />
  //</React.StrictMode>,
  //document.getElementById('root')
//);

//ReactDOM.render(
  //<React.StrictMode>
    //<Clock />
  //</React.StrictMode>,
  //document.getElementById('root')
//);

//ReactDOM.render(
  //<React.StrictMode>
    //<Football />
  //</React.StrictMode>,
  //document.getElementById('root')
//);

//ReactDOM.render(
  //<React.StrictMode>
    //<Samp />
  //</React.StrictMode>,
  //document.getElementById('root')
//);

ReactDOM.render(
  <React.StrictMode>
    <StateData />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
