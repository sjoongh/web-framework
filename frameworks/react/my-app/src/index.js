import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Hello from './Hello';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import Provider from 'react-redux'
import createStore from 'redux';

let basicState = [{id:0, name:'여자옷', quan:2}];

let store = createStore(reducer);

function reducer(state=basicState, action) {
  if (action.type === 'INCREASE') {
    let newState = [...state];
    return state
  } else {
    return state
  }
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    {/* <Hello /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
