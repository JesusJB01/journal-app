import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'
/* import initializeApp from "firebase/app"; */









const firebaseConfig = {
  apiKey: "AIzaSyBsE-N17PJLb4LSpB6FEK3T1GjLDFyJvQA",
  authDomain: "journal-app-5cf96.firebaseapp.com",
  projectId: "journal-app-5cf96",
  storageBucket: "journal-app-5cf96.appspot.com",
  messagingSenderId: "678682140619",
  appId: "1:678682140619:web:6e6ea53ccd95b8dbbea04e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}