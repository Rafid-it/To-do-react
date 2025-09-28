import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAWW5aM0CCQ1gA4j9agem7EascSmMDJGwc",
  authDomain: "to-do-app-8327b.firebaseapp.com",
  projectId: "to-do-app-8327b",
  storageBucket: "to-do-app-8327b.firebasestorage.app",
  messagingSenderId: "604246407391",
  appId: "1:604246407391:web:5ad509b10965e2e339916a",
  measurementId: "G-H0BLCFXZ2Z"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { database };


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAWW5aM0CCQ1gA4j9agem7EascSmMDJGwc",
//   authDomain: "to-do-app-8327b.firebaseapp.com",
//   projectId: "to-do-app-8327b",
//   storageBucket: "to-do-app-8327b.firebasestorage.app",
//   messagingSenderId: "604246407391",
//   appId: "1:604246407391:web:5ad509b10965e2e339916a",
//   measurementId: "G-H0BLCFXZ2Z"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);