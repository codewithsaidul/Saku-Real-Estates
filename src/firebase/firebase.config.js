// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-2O2UDogtAg02ed8_WWOCrJUhthN7evw",
    authDomain: "saku-estates.firebaseapp.com",
    projectId: "saku-estates",
    storageBucket: "saku-estates.appspot.com",
    messagingSenderId: "735247657721",
    appId: "1:735247657721:web:bb99cba14fbe24d5249028"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app