import { initializeApp } from 'firebase/app'; //inicializa la aplicacion en firebase
import { getFirestore } from "firebase/firestore";//la base de datos


//los datos de mi app necesarios para autentica, las entrega directo firebase
const firebaseConfig = {
    apiKey: "AIzaSyAUtnjRrELUD-AouSYKXzb_p8FMzX41kAU",
    authDomain: "crunchyclon.firebaseapp.com",
    projectId: "crunchyclon",
    storageBucket: "crunchyclon.firebasestorage.app",
    messagingSenderId: "330532164805",
    appId: "1:330532164805:web:7f21e97fb6a7a4114b8cac",
    measurementId: "G-JRYGQGZYGG"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

//las permito utilizar
export {app, db}