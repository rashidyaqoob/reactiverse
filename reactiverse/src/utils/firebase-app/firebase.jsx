// Import the functions you need from the SDKs you need
import { initializeApp, firebase } from "firebase/app";
import { useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIoLJSB0Ot42t_JFIgRuwcu2GHzUToFmk",
  authDomain: "reactiverse-8b02f.firebaseapp.com",
  projectId: "reactiverse-8b02f",
  storageBucket: "reactiverse-8b02f.appspot.com",
  messagingSenderId: "953134392082",
  appId: "1:953134392082:web:934ad27063b591fae149cb",
  measurementId: "G-EC50CTGJTS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Create User with Email and Password

export const FirebaseAuth = async (email, password) => {
  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      return user;
      // ...
    } else {
      // User is signed out
      // ...
      console.log("user is logged out");
    }
  });
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(userCredential);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/email-already-in-use") {
        alert("User is already registered, try logging in");
      }
      console.log(errorCode, errorMessage);
      // ..
    });
};
export const signOutUser = () => signOut(auth);
