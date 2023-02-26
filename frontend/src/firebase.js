// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPlKIQz4PH0wV7yoA1CqEL8Z4fMVi1daI",
  authDomain: "auth-blog-2a01e.firebaseapp.com",
  projectId: "auth-blog-2a01e",
  storageBucket: "auth-blog-2a01e.appspot.com",
  messagingSenderId: "663289113218",
  appId: "1:663289113218:web:a0dd4838911de6799c229b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);