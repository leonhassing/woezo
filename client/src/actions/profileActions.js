/*eslint-disable*/
import axios from 'axios';
import store from '../store'
import { GET_ERRORS } from './types';

// Services of user in database via API
export const setProfileInfo = requestBody => {
  if (window.location.hostname === "localhost") {
    var infoApi =
      window.location.protocol +
      "//" +
      window.location.hostname +
      ":5000/api/users/setprofileinfo";
  } else {
    var infoApi =
      window.location.protocol +
      "//" +
      window.location.hostname +
      "/api/users/setpersonalinfo";
  }
  axios
    .post(infoApi, requestBody)
    .catch(err =>
      store.dispatch({
        type: GET_ERRORS,
        payload: err
      })
    )
};

// Services of user in database via API
export const getUserInfoFromId = requestBody => {
  if (window.location.hostname === "localhost") {
    var userInfoApi =
      window.location.protocol +
      "//" +
      window.location.hostname +
      ":5000/api/users/getprofileinfo";
  } else {
    var userInfoApi =
      window.location.protocol +
      "//" +
      window.location.hostname +
      "/api/users/getprofileinfo";
  }
  return axios
    .post(userInfoApi, requestBody)
    .then(res => {
      return res.data
    })
    .catch(err => {
      store.dispatch({
        type: GET_ERRORS,
        payload: err
      })
      return err
    })
};