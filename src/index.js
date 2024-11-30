import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const elements = ["Lorem ipsum dolor sit amet.","Laboriosam dolorum ex culpa cupiditate.","Veniam, assumenda explicabo! Dolorum, obcaecati","Nobis, in nulla. Repellat, ea.","Dolores tempora placeat vel expedita!"];
const firstName = "Сергей";
const lastName = "Королев";
const currentDate = new Date();
root.render(
  <div>
    <h1>Какой-то текст</h1>

    <h2>{firstName} {lastName.substring(0,3)}.</h2>
    <ul>
      <li>{elements[4]}</li>
      <li>{elements[3]}</li>
      <li>{elements[2]}</li>
      <li>{elements[1]}</li>
      <li>{elements[0]}</li>
    </ul><br/>
    <p>&copy; Авторские права мои {currentDate.getFullYear()}</p>
  </div>
);
