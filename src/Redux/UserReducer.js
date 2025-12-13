import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const apiUrl= "http://localhost:3001/users"
export const fetchUsers= createAsyncThunk("users/fetchUsers", async()=>{
    const response= await fetch(apiUrl)
    return response.json()
})
const userSlice = createSlice ({
    name: "users",
    initialState:{
        list:[],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(fetchUsers.pending,(state,action)=>{
            state.status="loading";
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
             state.list= action.payload;
            state.status="succeded";
           
            console.log(action.payload,'payload');
            
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.status="failed";
            state.error= action.error.message;
        })
    }
})
export default userSlice.reducer