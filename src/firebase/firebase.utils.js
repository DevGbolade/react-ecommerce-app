import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAvpzVI7PtS3UO4G6s90QL6oyFZGckYfLI",
    authDomain: "react-ecommerce-app-66976.firebaseapp.com",
    databaseURL: "https://react-ecommerce-app-66976.firebaseio.com",
    projectId: "react-ecommerce-app-66976",
    storageBucket: "react-ecommerce-app-66976.appspot.com",
    messagingSenderId: "610932472943",
    appId: "1:610932472943:web:19626378d8d8314e9aa19a",
    measurementId: "G-EFR439QS48"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

