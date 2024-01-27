// import firebase from "firebase/app";
// import "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkI0_4I16p3oHR4uer3qqaJxMG-oOreKQ",
  authDomain: "agromart-1666e.firebaseapp.com",
  projectId: "agromart-1666e",
  storageBucket: "agromart-1666e.appspot.com",
  messagingSenderId: "613505373542",
  appId: "1:613505373542:web:51402944cb58cd5c8a24a7",
  measurementId: "G-57L66RD9EF",
};

// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
// export const auth = firebase.auth();
// export const provider = new firebase.auth.GoogleAuthProvider();
const auth = getAuth(app);

export { auth, provider };
