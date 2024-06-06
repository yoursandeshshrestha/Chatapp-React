import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV5KSlsIWDhYZ6aI-O2PXys3ZLdOlstc4",
  authDomain: "chatify-b1edb.firebaseapp.com",
  projectId: "chatify-b1edb",
  storageBucket: "chatify-b1edb.appspot.com",
  messagingSenderId: "1066848263344",
  appId: "1:1066848263344:web:227f03431c8226031eaf75",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(FirebaseApp);

export { auth };
