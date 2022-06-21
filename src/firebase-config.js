// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0tDVaUGs2RpADGUgXW8rhvaWKJjJ58C8",
  authDomain: "blog-website-project-a8071.firebaseapp.com",
  projectId: "blog-website-project-a8071",
  storageBucket: "blog-website-project-a8071.appspot.com",
  messagingSenderId: "457803636070",
  appId: "1:457803636070:web:9099c56d9c5fb35d7efca7",
  measurementId: "G-4YMVWTPNGG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
