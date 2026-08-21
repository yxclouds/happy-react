import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const DATA = [
  {  name: "Eat", completed: true ,id: "t1"},
  {  name: "Sleep", completed: false,id: "t2" }]
root.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>
);