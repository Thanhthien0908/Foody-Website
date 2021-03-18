import * as Types from './../const/actionType';
const initialState = [
    {
        urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/t/e/teriyaki-burger_4.png",
        foodName: "Burger Bò Teriyaki",
        price: 31000
    },
];
const product = ( state = initialState,action)=>{
    
    switch(action.type){
        case Types.INSERT_PRODUCT:
            return [...state,action.item];
        
        default: return state;
    }
}

export default product;
