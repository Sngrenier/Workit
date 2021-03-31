import "bootstrap/dist/css/bootstrap.min.css"
import $ from 'jquery'
import Popper from 'popper.js'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
import { CircuitProvider } from './context/circuitContext';
import {SpotifyProvider} from './context/SpotifyContext'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SpotifyProvider>
      <CircuitProvider>
        
    <App />
    </CircuitProvider>
    </SpotifyProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
