import { SET_CURRENT_CONTEXT } from '../type';

const initialState = {
    currentuser: {}
};

const Global = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case SET_CURRENT_CONTEXT:
            return {
                ...state,
                currentuser: action.payload
            };

        default:
            return state;
    }
};

export default Global;