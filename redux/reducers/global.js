import { SET_USER_CONTEXT, TOGGLE_VERIFY_MODAL, LOGOUT_USER } from '../type';

const initialState = {
    userContext: "",
    showVerifyModal: false
};

const Global = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case SET_USER_CONTEXT:
            return {
                ...state,
                userContext: action.payload
            };

        case TOGGLE_VERIFY_MODAL:
            return {
                ...state,
                showVerifyModal: action.payload
            };

        case LOGOUT_USER:
            return {
                ...state,
                userContext: "",
                showVerifyModal: false
            };

        default:
            return state;
    }
};

export default Global;