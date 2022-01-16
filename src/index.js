import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import { firebaseConfig } from './firebase-configs';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
