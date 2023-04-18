import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyC8u1pNyrDXb-aqjdCdYWyMFY01S_MubS8",
  authDomain: "e-ride-ec434.firebaseapp.com",
  projectId: "e-ride-ec434",
  storageBucket: "e-ride-ec434.appspot.com",
  messagingSenderId: "699478938559",
  appId: "1:699478938559:web:3db307bd76ee7c1be3870a"
};

//Paste your firebaseConfig here

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
