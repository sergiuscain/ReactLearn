import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const elements = ["Lorem ipsum dolor sit amet.","Laboriosam dolorum ex culpa cupiditate.","Veniam, assumenda explicabo! Dolorum, obcaecati","Nobis, in nulla. Repellat, ea.","Dolores tempora placeat vel expedita!"];
const firstName = "Сергей";
const lastName = "Королев";
const currentDate = new Date();
const getRandom = () => {
  return Math.floor(Math.random()*10);
}
root.render(
  <div>
    <h1>Какой-то текст</h1>

    <h2>{firstName} {lastName.substring(0,3)}.</h2>
    <ul>
      {
        elements.map(x => (<li>{x}</li>))
      }
      {
        Array.from({length: 5}, (_, index) =>
          <li>{`Элемент ${getRandom()}`}</li>
        )
      }
    </ul><br/>
    <p>&copy; Авторские права мои {currentDate.getFullYear()}</p>
  </div>
);
