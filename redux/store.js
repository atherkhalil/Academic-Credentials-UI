import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/root";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;