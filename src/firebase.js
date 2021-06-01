import firebase from 'firebase/app'
import 'firebase/firestore' 



  const firebaseConfig = {
    apiKey: "AIzaSyCmhQcDCgLTu-lr-Pg3zs7VQPr0Lou-5VY",
    authDomain: "crud-159b7.firebaseapp.com",
    projectId: "crud-159b7",
    storageBucket: "crud-159b7.appspot.com",
    messagingSenderId: "569840485605",
    appId: "1:569840485605:web:ff18e08a9946fe7d26800c"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)
  
