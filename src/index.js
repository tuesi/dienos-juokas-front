import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import Joke from './joke';

ReactDOM.render(
  <React.StrictMode>
    <Joke />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);