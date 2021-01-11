import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyDxUW_dpbw83waVfRqq14mFcjNBzklzr2M",
    authDomain: "axios2-b928a.firebaseapp.com",
    databaseURL: "https://axios2-b928a.firebaseio.com",
    projectId: "axios2-b928a",
    storageBucket: "axios2-b928a.appspot.com",
    messagingSenderId: "209320601781",
    appId: "1:209320601781:web:6ed710666516ef5573f6fc",
    measurementId: "G-C6CPPJTJN5"
  };
  // Initialize Firebase
  const firebaseApp =  firebase.initializeApp(firebaseConfig);

  export const db = firebaseApp.firestore();