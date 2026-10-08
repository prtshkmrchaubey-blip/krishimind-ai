import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig={
  apiKey:"AIzaSyC2AL0oSDsgzmtTOAoqmZy4QrjGfNaHA74",
  authDomain:"krishimind-ai-17627.firebaseapp.com",
  projectId:"krishimind-ai-17627",
  storageBucket:"krishimind-ai-17627.firebasestorage.app",
  messagingSenderId:"705207276272",
  appId:"1:705207276272:web:831ace2ab87541fbbae835"
};
const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);