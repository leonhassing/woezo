/*eslint-disable*/
import axios from 'axios';
import store from '../store'
import { GET_ERRORS, SET_CURRENT_LOCATION, SET_CURRENT_COORDS, SET_CURRENT_SERVICE } from './types';

// get location from geocode api
export const getGeocodeCoords = (body) => {
  if (window.location.hostname === "localhost") {
    var geocoordsApi =
      window.location.protocol +
      "//" +
      window.location.hostname +
      ":5000/api/users/setgeocoords";
  } else {
    var geocoordsApi =
      window.location.protocol +
      "//" +
      window.location.hostname +
      "/api/users/setgeocoords";
  }
  axios
    .post(geocoordsApi, body)
    .then(res => {
      store.dispatch(setCurrentCoords(res.data))
    })
    .catch(err =>
      store.dispatch({
        type: GET_ERRORS,
        payload: err
      })
    )
};

// Set location
export const setCurrentLocation = location => {
  return {
    type: SET_CURRENT_LOCATION,
    payload: location
  };
};

// Set service
export const setCurrentService = service => {
  return {
    type: SET_CURRENT_SERVICE,
    payload: service
  };
};

// Set coords
export const setCurrentCoords = coords => {
  return {
    type: SET_CURRENT_COORDS,
    payload: coords
  };
};
