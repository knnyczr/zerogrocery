import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart', 
    initialState: {
        cart: [],
    }, 
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        }, 
        removeFromCart: (state, action) => {
            // state.cart 
                // .slice?
                // .splice?
                // a search algo to search the item that was clicked and removed from the cart?
        }
    }
})

// exporting the reducers
export const { addToCart, removeFromCart } = cartSlice.actions; 

// this will allow us to view the cart's value
export const selectCart = state => state.cart.cart;

export default cartSlice.reducer;