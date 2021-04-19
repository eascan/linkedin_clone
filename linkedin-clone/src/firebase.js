import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjotLNlMVpjpDgkiY_XcS__gofx_8KFm0",
  authDomain: "linkedin-clone-13588.firebaseapp.com",
  projectId: "linkedin-clone-13588",
  storageBucket: "linkedin-clone-13588.appspot.com",
  messagingSenderId: "846717811010",
  appId: "1:846717811010:web:59ce853e6e93c272f230db",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
