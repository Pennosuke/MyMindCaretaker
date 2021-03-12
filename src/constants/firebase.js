import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBDZaIpMuFoNLhNrg35sLaPxl0mwMwwVHM",
  authDomain: "mymindmobile-d9d9b.firebaseapp.com",
  databaseURL: "https://mymindmobile-d9d9b.firebaseio.com",
  projectId: "mymindmobile-d9d9b",
  storageBucket: "mymindmobile-d9d9b.appspot.com",
  messagingSenderId: "219883441033",
  appId: "1:219883441033:web:cfb9b3949679ddc967ef58",
  measurementId: "G-8WHZ9S2NYK"
}

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;