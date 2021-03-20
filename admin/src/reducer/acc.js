import * as Types from './../const/actionTypes';
const initialState = [
    {
        username: "thiennt",
        pass: "1234",
        sdt: "0345000921",
        address: "HN"
    },
    {
        username: "thienNguyen",
        pass: "123456",
        sdt: "0345000921",
        address: "HN"
    }
];
const acc = (state = initialState, action) => {

    switch (action.type) {
        case Types.INSERT_PRODUCT:
            return [...state,action.item];
        case Types.DELETE_PRODUCT:
            return [...state.slice(0,action.id).concat(state.slice(action.id+1))]
        default: return state;
    }
}

export default acc;
