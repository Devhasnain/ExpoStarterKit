import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"authSlice",
    initialState:{name:"hasnain"},
    reducers:{
        test:(state)=>{
            console.log("redux is working")
        }
    }
});

export const {test} = authSlice.actions;

export default authSlice.reducer;