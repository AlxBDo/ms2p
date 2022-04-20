import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, signInAnonymously } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB74wDHLIzclQi79VQQhZpMiqsIBhPadjs",
    authDomain: "ms2p-c5f4e.firebaseapp.com",
    projectId: "ms2p-c5f4e",
    storageBucket: "ms2p-c5f4e.appspot.com",
    messagingSenderId: "521255562104",
    appId: "1:521255562104:web:1dd2d8f362cf218770b68d",
    measurementId: "G-J8VW4VJBLY"  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
signInAnonymously(auth).then(() => { return true }).catch((error) => {
    console.error("Authentication failled", error)
  });

export const firestoreDb = getFirestore(app) 