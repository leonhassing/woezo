import { SET_CURRENT_LOCATION } from '../actions/types';
import { SET_CURRENT_COORDS } from '../actions/types';
import { SET_CURRENT_SERVICE } from '../actions/types';

const initialState = {
  location: 'amsterdam',
  service: 'cat',
  coords: {
    lat: 52.3666969,
    lng: 4.8945398
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    case SET_CURRENT_COORDS:
      return {
        ...state,
        coords: action.payload
      };
    case SET_CURRENT_SERVICE:
      return {
        ...state,
        service: action.payload
      };
    default:
      return state;
  }
}
