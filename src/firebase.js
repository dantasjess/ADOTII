// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBDgPedr5x376cQxV5ICHgUfggGBnp5LrM",

  authDomain: "adotii.firebaseapp.com",

  projectId: "adotii",

  storageBucket: "adotii.appspot.com",

  messagingSenderId: "794809179574",

  appId: "1:794809179574:web:1b065657e42a7cef88b517"


};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth }
