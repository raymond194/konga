import { configureStore } from "@reduxjs/toolkit";
import userSlice from './user/userSlice'
import hoverSlice from './hover/hoverSlice'
import cartSlice from './cartitems/cartSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        hovered: hoverSlice,
        cartItems: cartSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch