import { SET_USER_CONTEXT } from '../type';

const initialState = {
    userContext: ""
};

const Global = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case SET_USER_CONTEXT:
            return {
                ...state,
                userContext: action.payload
            };

        default:
            return state;
    }
};

export default Global;