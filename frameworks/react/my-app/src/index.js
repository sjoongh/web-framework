import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Hello from './Hello';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    {/* <Hello /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
