const INITIAL_STATE = {
    cart: {} // Change cart to an object
};

export const ProductCart = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            const { productId: addedProductId } = action.payload;
            const addQuantity = (productId) => {
                const currentQuantity = state.cart[productId] || 0;
                return currentQuantity + 1;
            };
            return {
                ...state,
                cart: {
                    ...state.cart,
                    [addedProductId]: addQuantity(addedProductId)
                }
            };

        case "REMOVE_FROM_CART":
            const { productId: removedProductId } = action.payload;
            const removeQuantity = (productId) => {
                const currentQuantity = state.cart[productId] || 0;
                return currentQuantity > 1 ? currentQuantity - 1 : 0;
            };
            const updatedCart = { ...state.cart };
            if (updatedCart.hasOwnProperty(removedProductId)) {
                updatedCart[removedProductId] = removeQuantity(removedProductId);
            }
            return {
                ...state,
                cart: updatedCart
            };

       
        default:
            return state;
    }
};
