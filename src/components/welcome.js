import React from 'react';
import {Link} from 'react-router-dom';
function Welcome() {
  return (
    <div>
      <h1> Welcome to Door Smash! </h1>
      <Link to = "/login"> Login </Link>
      <Link to = "/signup"> Sign up </Link>
    </div>
  );
}

export default Welcome;
