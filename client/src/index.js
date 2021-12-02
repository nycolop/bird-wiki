import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Pass an argument to this function to check perfomance in the app
reportWebVitals();
