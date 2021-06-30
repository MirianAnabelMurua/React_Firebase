import  firebase from 'firebase'

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCIQ-U7Z0D5QUPlzUzvri0EUfxu9a6NVh4",
  authDomain: "react-87557.firebaseapp.com",
  projectId: "react-87557",
  storageBucket: "react-87557.appspot.com",
  messagingSenderId: "447040240083",
  appId: "1:447040240083:web:c54c8c84dd195223679726",
  measurementId: "G-0076H61QKV"
};
firebase.initializeApp(firebaseConfig);
firebase.auth = firebase.auth();
firebase.db=firebase.firestore();
firebase.analytics();
export default firebase;


