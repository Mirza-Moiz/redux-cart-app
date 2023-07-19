import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: { cartIsShown: false },
    reducers: {
        toggle(state) {
            state.cartIsShown = !state.cartIsShown;
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice