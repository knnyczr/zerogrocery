import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart', 
    initialState: {
        cart: {},
    }, 
    reducers: {
        addToCart: (state, action) => {
            state.cart[action.payload.id] ?
                state.cart[action.payload.id] += 1
                : state.cart[action.payload.id] = 1
        }, 
        removeFromCart: (state, action) => {
            delete state.cart[action.payload]
        }, 
        addByAmount: (state, action) => {
            state.cart[action.payload.id] = action.payload.amount
        }
    }
})

// exporting the reducers
export const { addToCart, removeFromCart, addByAmount } = cartSlice.actions; 

// this will allow us to view the cart's value
export const selectCart = state => state.cart.cart;

export default cartSlice.reducer;