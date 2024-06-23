import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPvU5i4Cd6eJpXW5CzDP8HwTep9JUK4e8",
    authDomain: "olx-react-3bc58.firebaseapp.com",
    projectId: "olx-react-3bc58",
    storageBucket: "olx-react-3bc58.appspot.com",
    messagingSenderId: "1099328306227",
    appId: "1:1099328306227:web:c34649107a8f05d9b67746",
    measurementId: "G-R6S3YV4PLJ"
  };

export default firebase.initializeApp(firebaseConfig)
