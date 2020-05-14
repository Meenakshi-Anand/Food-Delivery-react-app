import React from 'react';
import './App.css';
import Welcome from './components/welcome';
import Login from './components/login';
import Profile from './components/profile';
import {Route,Redirect,Switch,BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Redirect to="/" component={Welcome} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
