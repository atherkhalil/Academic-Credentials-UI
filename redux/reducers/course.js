import { SET_COURSES_LIST, ADD_CREDENTIAL } from '../type';

const initialState = {
    courseList: [],
    credentialList: [
        {
            type: "ACADEMIC",
            title: "Title",
            description: "Description",
            issuer: "",
            issuance_date: "",
            student: "",
            proof: "",
            Board: "Board"
        }
    ]
};

const Course = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case SET_COURSES_LIST:
            return {
                ...state,
                courseList: action.payload
            };

        case ADD_CREDENTIAL:
            return {
                ...state,
                credentialList: [...state.credentialList, action.payload]
            };

        default:
            return state;
    }
};

export default Course;