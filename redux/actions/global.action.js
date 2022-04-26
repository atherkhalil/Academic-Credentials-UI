import { SET_USER_CONTEXT, TOGGLE_VERIFY_MODAL } from "../type.js";

export const SetUserContext = (value) => dispatch => {
    dispatch({
        type: SET_USER_CONTEXT,
        payload: value
    })
}

export const ToggleVerifyModal = (value) => dispatch => {
    dispatch({
        type: TOGGLE_VERIFY_MODAL,
        payload: value
    })
}