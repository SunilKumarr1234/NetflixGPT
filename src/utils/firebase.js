// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdMsap5fDlULCgI2GmqhCe4gdikWbSfX4",
  authDomain: "netflixgpt-e304c.firebaseapp.com",
  projectId: "netflixgpt-e304c",
  storageBucket: "netflixgpt-e304c.firebasestorage.app",
  messagingSenderId: "1054784846054",
  appId: "1:1054784846054:web:724b0476bbd9f995372327",
  measurementId: "G-X13VKFS2BH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();