import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCS1MAzCyBB32PNAi0qVWFUZRJQdD1xzwA",
  authDomain: "imgpost-e5984.firebaseapp.com",
  projectId: "imgpost-e5984",
  storageBucket: "imgpost-e5984.appspot.com",
  messagingSenderId: "839924753037",
  appId: "1:839924753037:web:65237ec17e3a38109878c4",
  measurementId: "G-NL5LD3SPQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const Provider= new GoogleAuthProvider();

export { auth, Provider };