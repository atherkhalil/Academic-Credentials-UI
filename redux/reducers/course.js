import { SET_COURSES_LIST } from '../type';

const initialState = {
    courseList: {}
};

const Course = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case SET_COURSES_LIST:
            return {
                ...state,
                courseList: action.payload
            };

        default:
            return state;
    }
};

export default Course;