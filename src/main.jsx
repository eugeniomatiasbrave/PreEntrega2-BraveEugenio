import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'
import { ChakraProvider } from '@chakra-ui/react'


import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeA-xaqXiBmNiJ1UazcJaV9kqw-Yww7Gg",
  authDomain: "coder-euge.firebaseapp.com",
  projectId: "coder-euge",
  storageBucket: "coder-euge.appspot.com",
  messagingSenderId: "789235881070",
  appId: "1:789235881070:web:3615ecd80bb92e301a827f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <ChakraProvider> 
      <App />
    </ChakraProvider>
 </React.StrictMode>,
);



