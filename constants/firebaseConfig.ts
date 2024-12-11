// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; 
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsXZAfeonVao_gf_HGoPobhvP63o5D8lo",
  authDomain: "gameapp-328b5.firebaseapp.com",
  projectId: "gameapp-328b5",
  storageBucket: "gameapp-328b5.firebasestorage.app",
  messagingSenderId: "309779609185",
  appId: "1:309779609185:web:85fbb9f543d6d913aadc20",
  measurementId: "G-3P0FS4V0TJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);