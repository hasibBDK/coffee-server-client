import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfHpsc_nTbO_LI55b2RVcBeoTF5Swwgps",
  authDomain: "coffee-store-7c286.firebaseapp.com",
  projectId: "coffee-store-7c286",
  storageBucket: "coffee-store-7c286.firebasestorage.app",
  messagingSenderId: "560091100745",
  appId: "1:560091100745:web:f731d0546f1c2e545ff198"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  
export default app;