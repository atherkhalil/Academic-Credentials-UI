import { SET_CURRENT_CONTEXT } from "../type.js";

export const SetCurrentUser = (value) => dispatch => {
    dispatch({
        type: SET_CURRENT_CONTEXT,
        payload: value
    })
}