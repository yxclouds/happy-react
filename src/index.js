import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//#incloud<iostream>

const root = ReactDOM.createRoot(document.getElementById('root'));
const DATA = [
  {  name: "Eat", completed: true ,id: "t1"},
  {  name: "Sleep", completed: false,id: "t2" }]
root.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
