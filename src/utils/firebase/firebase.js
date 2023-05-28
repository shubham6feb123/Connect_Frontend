// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from   "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOVJuQ1iwsls_uUJ_x_f36uw44LEmxWCs",
  authDomain: "connect-d0ac9.firebaseapp.com",
  projectId: "connect-d0ac9",
  storageBucket: "connect-d0ac9.appspot.com",
  messagingSenderId: "977403305242",
  appId: "1:977403305242:web:beb2313eeb543576b0a0a3",
  measurementId: "G-YTFK9FR3Z0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp)

export default auth


