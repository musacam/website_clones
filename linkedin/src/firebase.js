import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCa4yL7_NmFNg6g5EONYuYfejbCON0OPTk",
    authDomain: "linkedin-clone-1676f.firebaseapp.com",
    projectId: "linkedin-clone-1676f",
    storageBucket: "linkedin-clone-1676f.appspot.com",
    messagingSenderId: "541092680059",
    appId: "1:541092680059:web:75e3b7b661855b56f16dde"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };