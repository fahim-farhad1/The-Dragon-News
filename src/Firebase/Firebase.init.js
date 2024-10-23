// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnQvwqHCx82bEGHLyS381Oe5F7AB6aBLE",
  authDomain: "the-dragon-news-e46c5.firebaseapp.com",
  projectId: "the-dragon-news-e46c5",
  storageBucket: "the-dragon-news-e46c5.appspot.com",
  messagingSenderId: "763929922594",
  appId: "1:763929922594:web:3e439d6823a36f969b4e7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;