import { createSlice } from "@reduxjs/toolkit";
import { types } from '../types/types';




/* const initialState = {
    uid: null,
    name:"",
}


const authReducerSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login (state, action ){
            return {
                ...state,
                uid: action.payload.uid,
                name: action.payload.displayName,

            }
        },
        logout (state, action){
            return {
                ...state,
                
            }
        }
    }
})

const { login, logout }  = authReducerSlice.actions;

export default authReducerSlice.reducer;
 */



export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
           return {
            uid: action.payload.uid,
            name: action.payload.displayName
           }
        case types.logout:
           return { }
        default:
            return state;
    }
} 