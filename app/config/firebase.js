// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpeG5G2AK8YGpJqFsqnZ1FOCDsjNN7Z44",
  authDomain: "hostella-442cf.firebaseapp.com",
  projectId: "hostella-442cf",
  storageBucket: "hostella-442cf.appspot.com",
  messagingSenderId: "381429936975",
  appId: "1:381429936975:web:e6ba1a0a772b69c2238b3a",
  measurementId: "G-1QTRR5F7LF",
};

// Initialize Firebase
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export  {auth};

