import * as Types from './../const/actionType';
const initialState = [];
const product = ( state = initialState,action)=>{
    
    switch(action.type){
        case Types.INSERT_PRODUCT:
            return [...state,action.item];
        case Types.DELETE_PRODUCT:
            return state.slice(0,action.id).concat(state.slice(action.id+1));
        case Types.DELETE_ALL:
            state = [];
            return state;
        default: return state;
    }
}

export default product;
