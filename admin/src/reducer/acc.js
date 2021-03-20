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
            state = [...state,action.item];
            localStorage.setItem("Account", JSON.stringify(state));
            return state;
        case Types.DELETE_PRODUCT:
            state = [...state.slice(0,action.id).concat(state.slice(action.id+1))];
            localStorage.setItem("Account", JSON.stringify(state));
            return state;
        default: return state;
    }
}

export default acc;
