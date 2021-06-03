import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import boostrap
import 'bootstrap/dist/css/bootstrap.css';
//import reportWebVitals from './reportWebVitals';
import firebaseConfig from './utils/firebasejeConfig';
import {
  FirebaseAppProvider } from 'reactfire';

ReactDOM.render(
  (<FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
