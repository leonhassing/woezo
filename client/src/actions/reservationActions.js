import { SET_RESERVATION_USER } from "./types";

// Set logged in user
export const setReservationUser = (data) => {
    return {
        type: SET_RESERVATION_USER,
        payload: data
    };
};