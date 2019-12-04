import { SET_ALL_SERVICES, SET_ALL_PERSONALINFO, SET_ALL_PROFILE } from '../actions/types';

const initialState = {
  services: {
    cleaning: false,
    cat: false,
    dog: false,
    baby: false,
    tutor: false,
    handy: false,
    it: false,
    garden: false,
    music: false
  },
  city: '',
  address: '',
  phonenumber: '',
  birthdate: '',
  description: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ALL_SERVICES:
      return Object.assign({}, state, {
        services: action.payload
      })
    case SET_ALL_PERSONALINFO:
      return Object.assign({}, state, {
        city: action.payload.city,
        address: action.payload.address,
        phonenumber: action.payload.phonenumber,
        birthdate: action.payload.birthdate,
        description: action.payload.description,
      })
    case SET_ALL_PROFILE:
      return Object.assign({}, state, {
        city: action.payload.city,
        address: action.payload.address,
        phonenumber: action.payload.phonenumber,
        birthdate: action.payload.birthdate,
        description: action.payload.description,
        services: action.payload.services
      })
    default:
      return state;
  }
}
