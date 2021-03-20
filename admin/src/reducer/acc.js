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
        
        default: return state;
    }
}

export default acc;
