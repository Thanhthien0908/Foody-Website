import * as Types from './../const/actionType';
const initialState = [];
const product = ( state = initialState,action)=>{
    
    switch(action.type){
        case Types.INSERT_PRODUCT:
            return [...state,action.item];
        
        default: return state;
    }
}

export default product;
