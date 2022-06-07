import {types} from '../types/types';


//Muestra el error del formulario
export const setError = (err) => {
    return {
        type: types.uiSetError,
        payload: err
    }
}

export const removeError = () => ({
    
        type: types.uiRemoveError,
    
})

//action para bloquear el boton de inicio de sesion de google durante el proceso de inicio de sesion
export const StartLoading = () => ({
    type: types.uiStartLoading,
})

export const FinishLoading = () => ({
    type: types.uiFinishLoading,
})