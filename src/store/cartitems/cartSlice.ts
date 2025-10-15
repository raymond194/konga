import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: number
    name: string
    img: string
    price: number
    discount?: number
    rating?: number
    category?: string
    subCategory?: string
    subType?: string
    sponsored?: boolean
    soldBy?: string
    delivery?: string
    todayDeal?: boolean
    reviewCount?: number | string
    sameDay?: string
}

interface cartState {
    value: CartItem[]
}

const initialState: cartState = {
  value: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addItem: (state, action: PayloadAction<CartItem>) => {
           state.value.push(action.payload)
      }
    }
})

export const {addItem} = cartSlice.actions
export default cartSlice.reducer