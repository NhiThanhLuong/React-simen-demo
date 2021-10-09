import { configureStore } from "@reduxjs/toolkit"
import cartReducer from '../features/slice/cartSlice'

const reducer = {
    carts: cartReducer,
}

const store = configureStore({
    reducer,
});

export default store