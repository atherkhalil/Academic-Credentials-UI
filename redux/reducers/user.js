import { SET_CURRENT_CONTEXT, LOGOUT_USER } from '../type';

const initialState = {
    currentuser: {}
};

const User = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case SET_CURRENT_CONTEXT:
            return {
                ...state,
                currentuser: action.payload
            };

        case LOGOUT_USER:
            return {
                ...state,
                currentuser: {}
            };

        default:
            return state;
    }
};

export default User;