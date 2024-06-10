export const addToCart=(payload)=>{

    return{
        type:"ADD_TO_CART",
        payload
    }
}
export const removeFromCart=(payload)=>{

    return{
        type:"REMOVE_FROM_CART",
        payload
    }
}
export const RemoveOneProduct=(productId,quantity)=>{

    return {
        type: "REMOVE_ONE_PRODUCT",
        payload: {
            productId: productId,
            quantity: quantity
        }
   
}
}