// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/* Importando recursos da biblioteca de autenticação do firebase */
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvk1aezREa97IESPp7YPhE1batgrhEqcE",
  authDomain: "app-autenticacao-d25d1.firebaseapp.com",
  projectId: "app-autenticacao-d25d1",
  storageBucket: "app-autenticacao-d25d1.appspot.com",
  messagingSenderId: "30073194943",
  appId: "1:30073194943:web:7da69892cf7d9f2f31790a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

/* Exportando os recursos de autenticação da biblioteca */
export const auth = getAuth(app);
