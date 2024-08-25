import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCCEk7ojCdhm9vmdsjQDcJ5sul7SZsh2_I",
  authDomain: "linkedin-clone1-ebcc6.firebaseapp.com",
  projectId: "linkedin-clone1-ebcc6",
  storageBucket: "linkedin-clone1-ebcc6.appspot.com",
  messagingSenderId: "767685324497",
  appId: "1:767685324497:web:3280a2fd5fd0a598095ff0",
  measurementId: "G-CMNDP6B36L"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
