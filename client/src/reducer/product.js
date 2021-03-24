import { combineReducers } from 'redux'
import * as Types from './../const/actionType';

const initialState = [];
const product = (state = initialState, action) => {

    switch (action.type) {
        case Types.INSERT_PRODUCT:
            state = [...state, action.item];
            localStorage.setItem("GioHang", JSON.stringify(state));
            return state;
        case Types.DELETE_PRODUCT:
            state = [...state.slice(0, action.id).concat(state.slice(action.id + 1))];
            localStorage.setItem("GioHang", JSON.stringify(state));
            return state;
        case Types.DELETE_ALL:
            state = [];
            localStorage.setItem("GioHang", JSON.stringify(state));
            return state;
        default: return state;
    }
}

export default combineReducers({ product })
