import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState : {
        name: "Name",
        email: 'Email',
        phone_number : 'Phone Number',
        address : 'Address',
    },
    reducers : {
        // Action is submitted elsewhere,  - written to state.name
       chooseName: (state, action) => {state.name = action.payload},
       chooseEmail: (state, action) => {state.email = action.payload},
       choosePhone: (state, action) => {state.phone_number = action.payload},
       chooseAddress: (state, action) => {state.address = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const {chooseAddress, chooseName, chooseEmail, choosePhone } = rootSlice.actions;