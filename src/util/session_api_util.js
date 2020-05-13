import $ from 'jquery';

export const signUp = (user) => (
  $.ajax({
    method: 'POST',
    url: 'http://doorsmash.herokuapp.com/api/user',
    data: user
  })
);

export const login = (user) => (
  $.ajax({
    method: 'POST',
    url: 'http://doorsmash.herokuapp.com/api/session',
    data: user
  })
);
