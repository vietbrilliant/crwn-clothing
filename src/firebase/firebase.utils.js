import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDN_5xMu_z6uDB38x7iZ6E5-MFGTgPXUuA",
  authDomain: "crwn-clothing-db-52630.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-52630.firebaseio.com",
  projectId: "crwn-clothing-db-52630",
  storageBucket: "crwn-clothing-db-52630.appspot.com",
  messagingSenderId: "1039053516976",
  appId: "1:1039053516976:web:8a05c4cc802e5d42a00b75",
  measurementId: "G-30RNRLNSRN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
