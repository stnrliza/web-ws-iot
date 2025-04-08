// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6WLA6jqSZnKAFd1I3k_Q3p-I6UJLZLnk",
  authDomain: "iot-website-38452.firebaseapp.com",
  projectId: "iot-website-38452",
  storageBucket: "iot-website-38452.appspot.com",
  messagingSenderId: "894276414577",
  appId: "1:894276414577:web:a029e8db1da52d24febfd0",
  measurementId: "G-Y5C53QLMVX"
};

// Initialize Firebase
initializeApp(firebaseConfig)
//const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();
export default db;
export {storage}
