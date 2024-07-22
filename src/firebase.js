// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8m2nmfMamyckj29EkoH4-itxVCNeNmb8",
  authDomain: "book-list-manager-e9673.firebaseapp.com",
  projectId: "book-list-manager-e9673",
  storageBucket: "book-list-manager-e9673.appspot.com",
  messagingSenderId: "477523404126",
  appId: "1:477523404126:web:664ceb84526930cd17dbcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export{auth}