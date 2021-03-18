import * as Types from './../const/actionType';
export const actInsertProduct = (item) =>{
    return {
        type: Types.INSERT_PRODUCT,
        item
    }
}
