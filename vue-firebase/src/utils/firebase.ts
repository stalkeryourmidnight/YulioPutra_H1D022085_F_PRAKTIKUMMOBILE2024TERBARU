// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDUkkV8P95MdmLsIL1gUiJzD7SAQC2krc8",
    authDomain: "vue-firebase-6f5d4.firebaseapp.com",
    projectId: "vue-firebase-6f5d4",
    storageBucket: "vue-firebase-6f5d4.firebasestorage.app",
    messagingSenderId: "941011052104",
    appId: "1:941011052104:web:3d77e92633bbaf27fb5a7d"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };