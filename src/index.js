import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const DATA = [
  {  name: "Study", completed: true ,id: "t1"},
  {  name: "Work", completed: false,id: "t2" },
  {  name:"Fitness",completed:false,id:"t3"}]
root.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>
);