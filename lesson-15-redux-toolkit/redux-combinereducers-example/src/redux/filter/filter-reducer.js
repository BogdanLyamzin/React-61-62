import {SET_FILTER} from "./filter-types";

const initialState = ""

const filterReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case SET_FILTER:
            return payload;
        default:
            return state;
    }
}

export default filterReducer;