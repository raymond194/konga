import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HoveredState {
    value: string | null
}

const initialState: HoveredState = {
    value: null
}

const hoveredSlice = createSlice({
    name: "hovered",
    initialState,
    reducers: {
        setHovered: (state, action: PayloadAction<string | null>) => {
          state.value = action.payload
        }
    }
})  

export const {setHovered} = hoveredSlice.actions
export default hoveredSlice.reducer