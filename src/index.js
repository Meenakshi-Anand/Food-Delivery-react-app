import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login';
import * as serviceWorker from './serviceWorker';
import {signUp,login} from './util/session_api_util.js'


document.addEventListener('DOMContentLoaded', ()=>{
  window.signUp = signUp;
  window.login = login
  const route = window.location.href.split('/')[3] ;
  var component = null;
  switch(route){
    case "login":
      component = <Login/> ;
      break;
    default:
      component = <App/> ;
  }
  const root = document.getElementById('root');
  ReactDOM.render(component,root);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
