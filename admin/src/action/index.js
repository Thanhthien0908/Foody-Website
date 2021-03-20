import * as Types from './../const/actionTypes';
export const actDeleteProduct = (id) =>{
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}
export const actInsertProduct = (item) =>{
    return {
        type: Types.INSERT_PRODUCT,
        item
    }
}
