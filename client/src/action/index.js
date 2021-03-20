import * as Types from './../const/actionType';
export const actInsertProduct = (item) =>{
    return {
        type: Types.INSERT_PRODUCT,
        item
    }
}
export const actDeleteProduct = (id) =>{
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}
export const actDeleteAllProduct = () =>{
    return {
        type: Types.DELETE_ALL
    }
}
