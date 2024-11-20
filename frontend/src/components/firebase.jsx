// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcY92Vey4ExD3F5HaZ4tKEswWEI4CI_kY",
  authDomain: "employee-management-syst-168c5.firebaseapp.com",
  projectId: "employee-management-syst-168c5",
  storageBucket: "employee-management-syst-168c5.firebasestorage.app",
  messagingSenderId: "277920739939",
  appId: "1:277920739939:web:da8c5dff4d3d68833e7e56",
  measurementId: "G-K6J5E26FE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);