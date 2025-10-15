import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserStates {
    isLoggedIn: boolean,
    userInfo: {
        email: string,
        password: string
    } | null
}

const initialState: UserStates = {
    isLoggedIn: false,
    userInfo: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loggedIn: (state, action: PayloadAction<{email: string, password: string} | null>) => {
            state.isLoggedIn = true;
            state.userInfo = action.payload;
        },

        loggedout: (state, action) => {
            state.isLoggedIn = false;
            state.userInfo = action.payload;
        }
    }
})

export const {loggedIn, loggedout} = userSlice.actions
export default userSlice.reducer