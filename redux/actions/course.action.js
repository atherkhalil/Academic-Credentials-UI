import { SET_COURSES_LIST } from "../type.js";

export const SetCoursesList = (value) => dispatch => {
    dispatch({
        type: SET_COURSES_LIST,
        payload: value
    })
}