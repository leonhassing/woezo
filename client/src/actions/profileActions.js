/*eslint-disable*/
import axios from 'axios';
import store from '../store'
import { GET_ERRORS, SET_ALL_SERVICES, SET_ALL_PROFILE, SET_ALL_PERSONALINFO } from './types';

// Services of user in database via API
export const updateProfileServices = requestBody => {
  if (window.location.hostname === "localhost") {
    var servicesApi =
      window.location.protocol +
      "//" +
      window.location.hostname +
      ":5000/api/users/services";
  } else {
    var servicesApi =
      window.location.protocol +
      "//" +
      window.location.hostname +
      "/api/users/services";
  }
  axios
    .post(servicesApi, requestBody)
    .then(store.dispatch(setProfileServices(requestBody.services)))
    .catch(err =>
      store.dispatch({
        type: GET_ERRORS,
        payload: err
      })
    )
};

// Services of user in database via API
export const updatePersonalInfo = requestBody => {
  var profileInfo = Object.create(requestBody);
  delete profileInfo.userId
  store.dispatch(setProfileInfo(profileInfo));
  if (window.location.hostname === "localhost") {
    var infoApi =
      window.location.protocol +
      "//" +
      window.location.hostname +
      ":5000/api/users/setpersonalinfo";
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
      ":5000/api/users/getpersonalinfo";
  } else {
    var userInfoApi =
      window.location.protocol +
      "//" +
      window.location.hostname +
      "/api/users/getpersonalinfo";
  }
  return axios
    .post(userInfoApi, requestBody)
    .then(res => {
      store.dispatch(setProfile(res.data));
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

// Profile services action dispenser
export const setProfileServices = services => {
  return {
    type: SET_ALL_SERVICES,
    payload: services
  };
};

// Profile info action dispenser
export const setProfileInfo = info => {
  return {
    type: SET_ALL_PERSONALINFO,
    payload: info
  };
};

// Profile action dispenser
export const setProfile = data => {
  return {
    type: SET_ALL_PROFILE,
    payload: data
  };
};