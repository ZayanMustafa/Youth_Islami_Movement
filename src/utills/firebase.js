
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, 
         signInWithEmailAndPassword, 
         createUserWithEmailAndPassword,
         GoogleAuthProvider, 
         signOut,
         onAuthStateChanged } from "firebase/auth";

const firebaseConffig = {
    apiKey: "AIzaSyCfq5jMywCUO-sNrFqkzVe0_zpQxx4YWOM",
    authDomain: "some-projects-of-zayyan.firebaseapp.com",
    databaseURL: "https://some-projects-of-zayyan-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "some-projects-of-zayyan",
    storageBucket: "some-projects-of-zayyan.firebasestorage.app",
    messagingSenderId: "940547270190",
    appId: "1:940547270190:web:6c79c1818f01af44f221bf",
    measurementId: "G-8J5PVEDEC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export {
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    GoogleAuthProvider, 
    signOut,
    onAuthStateChanged,
    auth,
    app,
}