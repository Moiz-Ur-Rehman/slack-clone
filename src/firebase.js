// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXW7oUoMUJvaqaNdJkbWxWmFI8ZK1U65A",
  authDomain: "slack-moiz.firebaseapp.com",
  projectId: "slack-moiz",
  storageBucket: "slack-moiz.appspot.com",
  messagingSenderId: "557393098798",
  appId: "1:557393098798:web:ef990ed6ce5f921531c7bf",
  measurementId: "G-1KZJ388B4X",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
