import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
// import * as admin from "firebase-admin";


var config = {
  apiKey: "AIzaSyDivEiTfXbxoisL1_Nt-8N9A8T2mdxdOBw",
  authDomain: "weather-forecast-pwa.firebaseapp.com",
  databaseURL: "https://weather-forecast-pwa.firebaseio.com",
  projectId: "weather-forecast-pwa",
  storageBucket: "weather-forecast-pwa.appspot.com",
  messagingSenderId: "136698904351"
};
firebase.initializeApp(config);



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('app')
);
registerServiceWorker();
