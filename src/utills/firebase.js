import { initializeApp } from "firebase/app";
import {
    getFirestore,
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    signInWithPopup

} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCkkiOGLP7Y-2m5OD8FVA4Zpaqe2NhHfy4",
    authDomain: "youthislami-movement.firebaseapp.com",
    projectId: "youthislami-movement",
    storageBucket: "youthislami-movement.firebasestorage.app",
    messagingSenderId: "816523599284",
    appId: "1:816523599284:web:534183d7dc7502e920a6e1",
    measurementId: "G-41ZNP4NJR1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    signInWithPopup,
    auth,
    app,
    provider,
}