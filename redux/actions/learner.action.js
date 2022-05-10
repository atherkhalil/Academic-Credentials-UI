import { UPDATE_CREDENTIAL } from "../type.js";

export const UpdateCredential = (value) => dispatch => {
    dispatch({
        type: UPDATE_CREDENTIAL,
        payload: value
    })
}