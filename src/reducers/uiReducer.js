import {types} from '../types/types';

const initialState = {
    Loading: false,
    msgError: null,
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload,
            }
        case types.uiRemoveError:
            return {
                ...state,
                msgError: null,
            }

        case types.uiStartLoading:
            return {
                ...state,
                Loading: true,
            }
        case types.uiFinishLoading:
            return{
                ...state,
                Loading: false,
            }
        
        default:
            return state;
    }
}