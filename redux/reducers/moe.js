import { SET_CREDENTIAL_LIST, UPDATE_CREDENTIAL } from '../type';

const initialState = {
    courseList: [],
    credentialList: [
        {
            id: "627a32e7bdd7fef935ce3173",
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
                firstName: "Mr.",
                lastName: "Bob",
                name: "Mr. Bob",
                courseSession: "4 Years",
                publicKey: "vRFy4g2/bRvIHpt3fbr4LA=="
            },
            status: "Pending",
            verified: false,
            issuerECDSA: 
            {
                k: "559013b2dc2196e112b142be2adb426a25f003a9ae504fbee4d0b58f18547564",
                r: "888e0051ede98729682408349a2bf37657a515474838e4a5121dc7351b1dd327",
                s: "79a7c464c1e6a912eb36a4804ef6699a273e9f8c8c4378040ea28f2740aab554",
                signingDate: "Tue, 10 May 2022 12:38:45 GMT"
            },
            learnerECDSA: {
                k: "0d07ba56a96e09c468578bb67b208bd00077ae79bdf7b28ad9feb55888155dd8",
                r: "7890dc448f2c1ee1e5a428b28bfa6267798782d2ea2f2f7ec251ec7909772b31",
                s: "2221ef87015f8d561b331b3d9244ca5321a7cff0a4aa5edd462bb5d9cc0fbb76",
                signingDate: "Tue, 10 May 2022 12:38:51 GMT"
            },
            moeECDSA: {
                k: "75e6a9fd2f9f9ac07dc048427006414db7d984be523d955a70384f0aeda7511a",
                r: "0a768b73bcb6fc2be07f933b6fd2148d824b8ddd923b961f3334e7d082d7e162",
                s: "76d1e2d2b9a1a160305b5f1a07d670220755651797f864348c24831d2f7eabd6",
                signingDate: "Tue, 10 May 2022 12:38:54 GMT"
            }
        },
        {
            id: "627a32e7bdd7fef935ce3175",
            type: "ACADEMIC",
            title: "Bachelors of Electrical Engineering",
            description: "Bachelors of Electrical Engineering is related to Electrical Engineering",
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
                name: "Mrs. Alis",
                courseSession: "4 Years",
                publicKey: "vRFy4g2/bRvIHpt3fbr4LA=="
            },
            status: "Approved",
            verified: true,
            issuerECDSA: 
            {
                k: "559013b2dc2196e112b142be2adb426a25f003a9ae504fbee4d0b58f18547564",
                r: "888e0051ede98729682408349a2bf37657a515474838e4a5121dc7351b1dd327",
                s: "79a7c464c1e6a912eb36a4804ef6699a273e9f8c8c4378040ea28f2740aab554",
                signingDate: "Tue, 10 May 2022 12:38:45 GMT"
            },
            learnerECDSA: {
                k: "0d07ba56a96e09c468578bb67b208bd00077ae79bdf7b28ad9feb55888155dd8",
                r: "7890dc448f2c1ee1e5a428b28bfa6267798782d2ea2f2f7ec251ec7909772b31",
                s: "2221ef87015f8d561b331b3d9244ca5321a7cff0a4aa5edd462bb5d9cc0fbb76",
                signingDate: "Tue, 10 May 2022 12:38:51 GMT"
            },
            moeECDSA: {
                k: "75e6a9fd2f9f9ac07dc048427006414db7d984be523d955a70384f0aeda7511a",
                r: "0a768b73bcb6fc2be07f933b6fd2148d824b8ddd923b961f3334e7d082d7e162",
                s: "76d1e2d2b9a1a160305b5f1a07d670220755651797f864348c24831d2f7eabd6",
                signingDate: "Tue, 10 May 2022 12:38:54 GMT"
            }
        },
        {
            id: "627a32e7bdd7fef935ce3174",
            type: "ACADEMIC",
            title: "Bachelors of Electrical Engineering",
            description: "Bachelors of Electrical Engineering is related to Electrical Engineering",
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
                firstName: "Mr.",
                lastName: "Mark",
                name: "Mr. Mark",
                courseSession: "4 Years",
                publicKey: "vRFy4g2/bRvIHpt3fbr4LA=="
            },
            status: "REJECTED",
            verified: false,
            issuerECDSA: 
            {
                k: "559013b2dc2196e112b142be2adb426a25f003a9ae504fbee4d0b58f18547564",
                r: "888e0051ede98729682408349a2bf37657a515474838e4a5121dc7351b1dd327",
                s: "79a7c464c1e6a912eb36a4804ef6699a273e9f8c8c4378040ea28f2740aab554",
                signingDate: "Tue, 10 May 2022 12:38:45 GMT"
            },
            learnerECDSA: {
                k: "0d07ba56a96e09c468578bb67b208bd00077ae79bdf7b28ad9feb55888155dd8",
                r: "7890dc448f2c1ee1e5a428b28bfa6267798782d2ea2f2f7ec251ec7909772b31",
                s: "2221ef87015f8d561b331b3d9244ca5321a7cff0a4aa5edd462bb5d9cc0fbb76",
                signingDate: "Tue, 10 May 2022 12:38:51 GMT"
            },
            moeECDSA: {
                k: "75e6a9fd2f9f9ac07dc048427006414db7d984be523d955a70384f0aeda7511a",
                r: "0a768b73bcb6fc2be07f933b6fd2148d824b8ddd923b961f3334e7d082d7e162",
                s: "76d1e2d2b9a1a160305b5f1a07d670220755651797f864348c24831d2f7eabd6",
                signingDate: "Tue, 10 May 2022 12:38:54 GMT"
            }
        },
        {
            id: "627a32e7bdd7fef935ce3179",
            type: "ACADEMIC",
            title: "Bachelors of Mechanical Engineering",
            description: "Bachelors of Mechanical Engineering is related to Mechanical Engineering",
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
                firstName: "Mr.",
                lastName: "Bob",
                name: "Mr. Bob",
                courseSession: "4 Years",
                publicKey: "vRFy4g2/bRvIHpt3fbr4LA=="
            },
            status: "Pending",
            verified: true,
            issuerECDSA: 
            {
                k: "559013b2dc2196e112b142be2adb426a25f003a9ae504fbee4d0b58f18547564",
                r: "888e0051ede98729682408349a2bf37657a515474838e4a5121dc7351b1dd327",
                s: "79a7c464c1e6a912eb36a4804ef6699a273e9f8c8c4378040ea28f2740aab554",
                signingDate: "Tue, 10 May 2022 12:38:45 GMT"
            },
            learnerECDSA: {
                k: "0d07ba56a96e09c468578bb67b208bd00077ae79bdf7b28ad9feb55888155dd8",
                r: "7890dc448f2c1ee1e5a428b28bfa6267798782d2ea2f2f7ec251ec7909772b31",
                s: "2221ef87015f8d561b331b3d9244ca5321a7cff0a4aa5edd462bb5d9cc0fbb76",
                signingDate: "Tue, 10 May 2022 12:38:51 GMT"
            },
            moeECDSA: {
                k: "75e6a9fd2f9f9ac07dc048427006414db7d984be523d955a70384f0aeda7511a",
                r: "0a768b73bcb6fc2be07f933b6fd2148d824b8ddd923b961f3334e7d082d7e162",
                s: "76d1e2d2b9a1a160305b5f1a07d670220755651797f864348c24831d2f7eabd6",
                signingDate: "Tue, 10 May 2022 12:38:54 GMT"
            }
        },
    ]
};

const Moe = (state = initialState, action) => {
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

export default Moe;