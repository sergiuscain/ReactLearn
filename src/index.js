import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import HomePage from './Layout/Home/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const firstName = "Сергей";
const lastName = "Королев";
const collection = [];
const getRandom = () => {
  return Math.floor(Math.random()*10);
}
for(let i = 10; i<100;i++){
  collection.push(i)
};
root.render(
  <div>
    <HomePage/>
  </div>
);
