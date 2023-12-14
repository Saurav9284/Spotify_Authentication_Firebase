// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS7ECQ_3vNvQ6K5HKrXa9VF6lvkK9WAo4",
  authDomain: "spotify-react-authentication.firebaseapp.com",
  projectId: "spotify-react-authentication",
  storageBucket: "spotify-react-authentication.appspot.com",
  messagingSenderId: "976124808031",
  appId: "1:976124808031:web:793851ae9324aeada704ea",
  measurementId: "G-WFVM6ZYSV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();
 export {auth,provider};