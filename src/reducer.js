import {FILTER} from './action';
const initialState = {
    products: 
    [
        {
            "'id'":1,
            "name": "Iphone X",
            "price": "20.000.000đ", 
            "category": "apple",
            "image":
            "https://bachlongmobile.com/media/catalog/product/cache/1/image/040ec09b1e35df139433887a97daa66f/6/3/636483223586180190_3_13_7.jpg"
         },
         {
            "id":2,
            "name": "Samsung Galaxy Fold",
            "price": "50.000.000đ", 
            "category": "samsung",
            "image":
           "https://cdn.tgdd.vn/Products/Images/42/198158/samsung-galaxy-fold-black-400x400.jpg"
        },
    
        {
            "id":3,
            "name": "Iphone 11 Pro Max 512GB",
            "price": "43.990.000đ", 
            "image":
            "https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-400x400.jpg"
        },
    
        {
            "id":4,
            "name": "Iphone 11 Pro Max 256GB",
            "price": "37.990.000đ", 
            "image": 
            "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-black-400x400.jpg"
        },
    
        {
            "id":5,
            "name": "Samsung Galaxy Z  Flip",
            "price": "36.000.000đ", 
            "image": 
            "https://cdn.tgdd.vn/Products/Images/42/213022/samsung-galaxy-z-flip-400x400.jpg"
        }
    ]
       
}

const reducer = (state = initialState, action)=> {
    switch(action.type){
        case FILTER: {
            return {...state, category: action.category}
        }
        default: return state;
    }
}

export default reducer;