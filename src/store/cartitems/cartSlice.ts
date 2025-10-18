import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
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
  sameDay?: string,
  quantity: number
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
    addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.value.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.value.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action: PayloadAction<string | number>) => {
      const id = action.payload
      state.value = state.value.filter(item => item.id !== id)
    },
    updateQuantity: (state, action: PayloadAction<{ id: string | number; quantity: number }>) => {
      const item = state.value.find(item => item.id === action.payload.id)
      if (item) item.quantity = action.payload.quantity

    }
  }
})

export const { addItem, removeItem,updateQuantity } = cartSlice.actions
export default cartSlice.reducer