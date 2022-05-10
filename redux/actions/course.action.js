import { SET_COURSES_LIST, ADD_CREDENTIAL } from "../type.js";

export const SetCoursesList = (value) => dispatch => {
    dispatch({
        type: SET_COURSES_LIST,
        payload: value
    })
}

export const AddCredential = (value) => dispatch => {
    dispatch({
        type: ADD_CREDENTIAL,
        payload: value
    })
}