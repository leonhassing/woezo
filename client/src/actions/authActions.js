/*eslint-disable*/
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import store from '../store'

import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Register User
export const registerUser = (userData, instantLogin) => {

  if(window.location.hostname === 'localhost')
  {
    var registerApi = window.location.protocol + "//" + window.location.hostname + ":5000/api/users/register";
  } else {
    var registerApi = window.location.protocol + "//" + window.location.hostname + "/api/users/register";
  }


  axios
    .post(registerApi, userData)
    .then(response => {
        console.log("Successful registration:");
        console.log(response);
        if(instantLogin) {
          let loginData = {
            email: userData.email,
            password: userData.password
          }
          loginUser(loginData);
        }
      })
    .catch(err =>
      store.dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
};

// Login - Get User Token
export function loginUser(userData) {

  if(window.location.hostname === 'localhost')
  {
    var loginApi = window.location.protocol + "//" + window.location.hostname + ":5000/api/users/login";
  } else {
    var loginApi = window.location.protocol + "//" + window.location.hostname + "/api/users/login";
  }

  axios
    .post(loginApi, userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      store.dispatch(setCurrentUser(decoded));
      window.location.replace("/profile-page");
    })
    .catch(err=>{
      store.dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })})
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export function logoutUser() {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  store.dispatch(setCurrentUser({}));
  window.location.replace("/");
};
