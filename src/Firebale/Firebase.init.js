// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLYZtCTck_JicMuJA2NxYJ_prXTOb4b1w",
  authDomain: "assaignment10.firebaseapp.com",
  projectId: "assaignment10",
  storageBucket: "assaignment10.firebasestorage.app",
  messagingSenderId: "837506960911",
  appId: "1:837506960911:web:67c3978370e8ee676e9d7a",
  measurementId: "G-RVH0P21DTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);