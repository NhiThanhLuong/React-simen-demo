import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
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
                toast.info(`inscreased ${state.cartItems[itemIndex].name} cart quantity`, {
                    position: 'bottom-left',
                })
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.name} added to cart`, {
                    position: 'bottom-left',
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        addQuantityItem: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.productItem.id)
            if (itemIndex >= 0) {
                toast.info(`inscreased ${action.payload.quantity} ${action.payload.productItem.name} cart quantity`, {
                    position: 'bottom-left',
                })
                state.cartItems[itemIndex].cartQuantity += action.payload.quantity
            } else {
                const tempProduct = {...action.payload.productItem, cartQuantity: action.payload.quantity}
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.quantity} ${action.payload.productItem.name} added to cart`, {
                    position: 'bottom-left',
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

        },
        removeFromCart: (state, action) => {
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
            state.cartItems = nextCartItems
            toast.error(`${action.payload.name} remove from cart`, {
                position: 'bottom-left',
            })
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
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
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }
    }
})

const { reducer, actions } = cart
export const { addToCart, addQuantityItem, removeFromCart, getTotals } = actions
export default reducer;