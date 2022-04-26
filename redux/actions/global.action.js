import { SET_USER_CONTEXT } from "../type.js";

export const SetUserContext = (value) => dispatch => {
    dispatch({
        type: SET_USER_CONTEXT,
        payload: value
    })
}