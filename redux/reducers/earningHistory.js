import { CHART } from '../actions/type';

const initialState = {
    expenses: {
        name: 'Earning',
        youtube: [65, 59, 80, 81, 56, 55, 40,80, 81, 56, 55, 40],
        facebook: [40, 105, 92, 155, 138, 205, 120,92, 155, 138, 205, 120],
    },
};

const EarningHistory = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case CHART:
            return {
                ...state,
                payload,
            };
        default:
            return state;
    }
};

export default EarningHistory;
