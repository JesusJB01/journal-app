import React, {useEffect, useState} from "react";
import { AuthRouter } from "./AuthRouter";
import {JournalScreen} from "../components/journal/JournalScreen";
import {firebase} from "../firebase/firebase-config";
import { login } from "../action/auth";
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { startLoadingNotes } from "../action/notes";

export const AppRouter = () => {
  
  
  //verifica si esta logeado
  const [Checking, setChecking] = useState( true );
  const [isLoggedIn, setisLoggedIn]= useState(false);
  
  const dispatch = useDispatch()
  //persistencia de los datos de inicio de sesion

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        /* setChecking(false) */
        setisLoggedIn(true)
        
        dispatch(startLoadingNotes(user.uid));

      } else {
        setisLoggedIn(false)
      }
        setChecking(false)
      
    });
  
  }, [dispatch, setChecking, setisLoggedIn])
  
  if (Checking) {
    return <h1>Cargando...</h1>
  }

  return (
    <Router>
        <div>
            <Switch>
                <PublicRoute 
                isAuthenticated={isLoggedIn}
                path="/auth" 
                component={AuthRouter} />



                <PrivateRoute 
                isAuthenticated={isLoggedIn}
                exact path="/" component={JournalScreen} />

                <Redirect to="/auth/login" />

            </Switch>

        </div>

    </Router>
  )
}
