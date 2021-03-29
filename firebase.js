import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDphnRg36F7zfw_cU8EzXhCeEBaFxAGj2o",
  authDomain: "next-whatsapp-5d880.firebaseapp.com",
  projectId: "next-whatsapp-5d880",
  storageBucket: "next-whatsapp-5d880.appspot.com",
  messagingSenderId: "294763484203",
  appId: "1:294763484203:web:32ef9dd7a1a112e0dcc66e",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
