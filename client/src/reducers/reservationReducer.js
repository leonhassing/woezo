import { SET_RESERVATION_USER } from '../actions/types';

const initialState = {
    coords: {
        lat: 0,
        lng: 0
    },
    services: {},
    profilepicture: "",
    profileicon: "",
    originalpicture: "",
    address: "",
    city: "",
    birthdate: "",
    phonenumber: "",
    description: "",
    date: "",
    _id: "",
    name: "",
    email: "",
    password: ""
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_RESERVATION_USER:
            return Object.assign({}, state, {
                coords: action.payload.coords,
                services: action.payload.services,
                profilepicture: action.payload.profilepicture,
                profileicon: action.payload.profileicon,
                originalpicture: action.payload.originalpicture,
                address: action.payload.address,
                city: action.payload.city,
                birthdate: action.payload.birthdate,
                phonenumber: action.payload.phonenumber,
                description: action.payload.description,
                date: action.payload.date,
                _id: action.payload._id,
                name: action.payload.name,
                email: action.payload.email,
                password: ""
            })
        default:
            return state;
    }
}
