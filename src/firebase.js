import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC7Xq4Z8og2pWBSx6tM-RDcaf84CXapu4Y",
  authDomain: "tube-5df57.firebaseapp.com",
  projectId: "tube-5df57",
  storageBucket: "tube-5df57.appspot.com",
  messagingSenderId: "968353639243",
  appId: "1:968353639243:web:e808ae45919116003316ce",
  measurementId: "G-886DFPXGS8"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebaseApp.auth();
export {db,auth}