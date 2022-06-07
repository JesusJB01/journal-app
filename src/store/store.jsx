import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer' 
import { uiReducer } from '../reducers/uiReducer'; 
import { notesReducer } from '../reducers/noteReducer'; 


/* const reducersAuth = combineReducers({
    auth: authReducer,
    ui: uiReducer 
})  */

const middlewareEnhancer = applyMiddleware(thunk);

export const store = configureStore({
    reducer: {
       /*  reducersAuth, */
        auth: authReducer,
        ui: uiReducer,
        notesReducer,
        middlewareEnhancer,
        
    }
});