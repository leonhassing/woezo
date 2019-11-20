/*eslint-disable*/
import axios from 'axios';
import store from '../store'
import { GET_ERRORS, SET_CURRENT_LOCATION, SET_CURRENT_COORDS, SET_CURRENT_SERVICE } from './types';

// get location from geocode api
export const getGeocodeCoords = (location) => {
  var geocodeApiQuery = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyBe-EFdjehTk_14OJIRHrCgnWOU9sZaO-0`
  return axios
    .get(geocodeApiQuery)
    .then(response => { 
      const coords = {
        lat: response.data.results[0].geometry.location.lat,
        lng: response.data.results[0].geometry.location.lng
      }
      return store.dispatch(setCurrentCoords(coords));
    })
    .then(response => {
      return response
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
