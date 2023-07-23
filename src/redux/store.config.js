import {createStore, combineReducers} from "redux";

const rootReducer = combineReducer ({});

// Redux store, nơi tập trung các state của ứng dụng

export const store = createStore (
    rootReducer, /* preloadedState, */
    // extension cho redux.
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);