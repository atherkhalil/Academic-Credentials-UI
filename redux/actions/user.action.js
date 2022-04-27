import { SET_CURRENT_CONTEXT, LOGOUT_USER } from "../type.js";

export const SetCurrentUser = (value) => dispatch => {
    dispatch({
        type: SET_CURRENT_CONTEXT,
        payload: value
    })
}

export const LogoutUser = (value) => dispatch => {
    dispatch({
        type: LOGOUT_USER,
        payload: value
    })
}