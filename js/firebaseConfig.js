// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEQNrCcPTrZr5ehLW4PDeIpqUatuNXJHA",
  authDomain: "projeto-teste-c0871.firebaseapp.com",
  databaseURL: "https://projeto-teste-c0871-default-rtdb.firebaseio.com",
  projectId: "projeto-teste-c0871",
  storageBucket: "projeto-teste-c0871.firebasestorage.app",
  messagingSenderId: "398564074861",
  appId: "1:398564074861:web:b7538ca72f94f7c6846664",
  measurementId: "G-CB8LYGG34C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {app, db}