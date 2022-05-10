import { SET_CREDENTIAL_LIST, UPDATE_CREDENTIAL } from '../type';

const initialState = {
    courseList: [],
    credentialList: [
        {
            id: "627a32e7bdd7fef935ce3175",
            type: "ACADEMIC",
            title: "Bachelors of Computer Engineering",
            description: "Bachelors of Computer Engineering is related to Computer Engineering",
            issuanceDate: new Date(),
            Board: "Board",
            courseId: "627a32e7bdd7fef935ce31f7",
            session: "2022-2026",
            issuer: {
                id: "627a32e7bdd7fef935ce31f3",
                type: "ACCREDITED",
                name: "Mr. Bob",
                url: "",
                publicKey: "vRFy4g2/bRvIHpt3fbr4LA==",
            },
            learner: {
                id: "627a32e7bdd7fef935ce31f5",
                registrationNumber: "0001",
                courseRegistrationNumber: "2235",
                firstName: "Mrs.",
                lastName: "Alis",
                courseSession: "4 Years",
                publicKey: "vRFy4g2/bRvIHpt3fbr4LA=="
            },
            status: false
        }
    ]
};

const Learner = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case SET_CREDENTIAL_LIST:
            return {
                ...state,
                credentialList: action.payload
            };

        case UPDATE_CREDENTIAL:
            return {
                ...state,
                credentialList: action.payload
            };

        default:
            return state;
    }
};

export default Learner;