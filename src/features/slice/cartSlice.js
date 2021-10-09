import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cart = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.cartItems.push(tempProduct)
            }
        },
        removeFromCart: (state, action) => {
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload
            )
            state.cartItems = nextCartItems
        },
        getTotals: (state, action) => {
            let {total, quantity} = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const {newPrice, cartQuantity} = cartItem
                    const itemTotal = newPrice * cartQuantity

                    cartTotal.total += itemTotal
                    cartTotal.quantity += cartQuantity

                    return cartTotal
                },
                {
                    total: 0,
                    quantity: 0
                }
            )

            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
        }
    }
})

const { reducer, actions } = cart
export const { addToCart, removeFromCart, getTotals } = actions
export default reducer;