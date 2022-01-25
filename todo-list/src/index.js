import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter ,
  Routes,
  Route,

} from 'react-router-dom';
import Login from './contents/login.js'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={< App />}></Route>
      <Route exact path='/login' element={< Login />}></Route>
    </Routes>
  </BrowserRouter>  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
