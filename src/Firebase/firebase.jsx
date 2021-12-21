import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAz9OceOiDyte-MhbJvylxaPb0rDLPjwx8",
  authDomain: "dog-store-e281a.firebaseapp.com",
  projectId: "dog-store-e281a",
  storageBucket: "dog-store-e281a.appspot.com",
  messagingSenderId: "315690059334",
  appId: "1:315690059334:web:84ba7f2626e768606bac47",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

