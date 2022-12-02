import { createSlice } from '@reduxjs/toolkit'

const items = localStorage.getItem('cartItems') != null ? JSON.parse
(localStorage.getItem('cartItems')) : []


export const cartSlice = createSlice ({
    name: 'cart',
    initialState: {
    cartItems: items,
    },
    reducers: {
    addItemToCart: (state, action) => {
        const timeId = new Date().getTime()
       state.cartItems.push({
        id: timeId,
        elementId: action.payload.element.id,
        quantity: action.payload.quantity,
        totalPrice: action.payload.quantity * action.payload.element.price
       })
       localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map
        (item=>item)))
    },
    removeItemFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(
            cartItem => cartItem.id !== action.payload.cartItemId
        )
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map
            (item=>item)))
    }
    }
})

export const getTotalPrice =state => {
    return state.cart.cartItems.reduce((total, cartItems)=> {
        return cartItems.totalPrice + total
    }, 0)
}

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer