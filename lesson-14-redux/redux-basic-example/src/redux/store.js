import {createStore} from "redux";

import reducer from "./reducer";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/*
const createStore = (reducer, initialState) => {
    const startStore = reducer(initialState);
    return startStore;
}
*/

export default store;