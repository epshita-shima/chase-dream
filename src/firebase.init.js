// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA94sfotSTbIzins-Xjms2Nk_UG_H0BqKo",
    authDomain: "chase-dream.firebaseapp.com",
    projectId: "chase-dream",
    storageBucket: "chase-dream.appspot.com",
    messagingSenderId: "37722842823",
    appId: "1:37722842823:web:ba404739153c709d0780e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;