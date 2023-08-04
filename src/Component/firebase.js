
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


const firebaseConfig  = {
  apiKey: "AIzaSyAvVoqqBEnGRM--AzCc9cJmLBfiCFW_4kY",
  authDomain: "social-media-project-e4646.firebaseapp.com",
  projectId: "social-media-project-e4646",
  storageBucket: "social-media-project-e4646.appspot.com",
  messagingSenderId: "248539801862",
  appId: "1:248539801862:web:41d6a8eca29b6bffb95687",
  measurementId: "G-JJT9Z5WGS2"

};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
