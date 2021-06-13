import firebase from 'firebase/app';  
import 'firebase/firebase-firestore';

firebase.initializeApp({
  apiKey: "AIzaSyA5jsIsPZs1uv96GSstpJY1BntQszA9l8s",
  authDomain: "crewtable-f5e18.firebaseapp.com",
  projectId: "crewtable-f5e18",
  storageBucket: "crewtable-f5e18.appspot.com",
  messagingSenderId: "100904437780",
  appId: "1:100904437780:web:41c81e1054e5256fabbf01",
});
let db = firebase.firestore();
db.settings({timestampsInSnapshots:true});

export const auth = firebase.auth();

export default db;


