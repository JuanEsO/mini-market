const initialState = {
    cartItems: [],
    cartTotal: 0
}

/*const initialState = JSON?.parse(typeof window !== 'undefined' && localStorage.getItem('cart')) || {
    cartItems: [],
    cartTotal: 0
}*/

//update local storage with state for cart (not functional because of SSR)

export const updateLocalStorage = (state) => {
    window.localStorage.setItem('cart', JSON.stringify(state));
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (state.cartItems.find((item) => item.id === action.payload.id)) { //if item is already in cart
                const newCart = state.cartItems.map((item) => {
                    if (item.id === action.payload.id) { //if item id matches payload id
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item;
                });
                const newState = {
                    ...state,
                    cartItems: newCart,
                    cartTotal: state.cartTotal + parseInt(action.payload.price)
                }
                updateLocalStorage(newState);
                return newState;
            }
            const newState = {
                ...state,
                cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
                cartTotal: state.cartTotal + parseInt(action.payload.price)
            }
            updateLocalStorage(newState);
            return newState;
        case 'REMOVE_FROM_CART':
            if (state.cartItems.find((item) => item.id === action.payload.id)) { //if item is already in cart
                const newCart = state.cartItems.map((item) => { //map through cart items
                    if (item.id === action.payload.id) { //if item id matches payload id
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }
                    return item;
                }).filter((item) => item.quantity > 0);
                const newState = {
                    ...state,
                    cartItems: newCart,
                    cartTotal: state.cartTotal - parseInt(action.payload.price)
                }
                updateLocalStorage(newState);
                return newState;
            }
            return state;
        default:
            return state;
    }
}

export default CartReducer;