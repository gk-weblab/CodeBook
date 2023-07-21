export const cartReducer = (state, action) => {
    const {type,payload} = action;
    switch (type) {
        case "ADD_TO_CART":
            return {...state, cartList: payload}
        case "REMOVE_FROM_CART":
            return {...state, cartList: payload}
        case "CLEAR_CART":
            return payload
       case "REMOVE_ONE_FROM_CART":
        return {...state, cartList:payload}
       default:
        throw new Error(`${type} does not exist.`)
        
    }    
    
}