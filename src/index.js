import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const firstName = "Сергей";
const lastName = "Королев";
const currentDate = new Date();
const collection = [];
const getRandom = () => {
  return Math.floor(Math.random()*10);
}
for(let i = 10; i<100;i++){
  collection.push(i)
};
root.render(
  <div>
    <h1>Какой-то текст</h1>

    <h2>{firstName} {lastName.substring(0,3)}.</h2>
    <ul>
      {collection.map(x => (x%10==0 ? <br/> : <button className='btn btn-primary'>{x}</button>))}
    </ul><br/>
    <p>&copy; Авторские права мои {currentDate.getFullYear()}</p>
  </div>
);
