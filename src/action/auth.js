import { types } from '../types/types';
import {firebase, googleAuthProvider} from '../firebase/firebase-config.js';
import { StartLoading, FinishLoading } from './ui';
import Swal from 'sweetalert2/dist/sweetalert2.all.js'
import { noteLogout } from './notes';



export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        
        dispatch(StartLoading());
        firebase.auth().signInWithEmailAndPassword (email, password)
        .then(({user}) => {
            
            dispatch(login(user.uid, user.displayName));
            dispatch(FinishLoading());

        })

        .catch(e => {
            console.log(e);
            dispatch(FinishLoading());
            Swal.fire("error", e.message, "error");
        })
    }
}



//action para registrar usuario
export const startRegisterWithEmailAndPassword = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async ({user}) => {
        
            await user.updateProfile({displayName: name})

            dispatch(login(user.uid, user.displayName))
        })
        .catch((e) => {
            console.log(e)
            Swal.fire("error", e.message, "error");
        })
    }
}

//action para iniciar sesion de usuarios registrados con google
export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider) 
        .then(({user}) =>{
            dispatch(
                login(user.uid, user.displayName)
            )
        });
    }
}



export const login = (uid, displayName) => ({
    
        type: types.login,
        payload: {
            uid,
            displayName
        }
});


export const startLogout = () => {
    return async(dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
        dispatch(noteLogout());
        
    }
}

export const logout = () => ({
    type: types.logout
}) 