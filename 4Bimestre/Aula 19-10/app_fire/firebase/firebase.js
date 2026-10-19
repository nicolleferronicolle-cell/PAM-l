import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJ-HgUFhKOExqHJhWq_IIOTRxDgAqyZrY",
  authDomain: "fir-8cad4.firebaseapp.com",
  projectId: "fir-8cad4",
  storageBucket: "fir-8cad4.firebasestorage.app",
  messagingSenderId: "841420398414",
  appId: "1:841420398414:web:61005381d19eba7d91481f",
  measurementId: "G-12JZ0VPQ6V"
};
 
const app = initializeApp(firebaseConfig); 

export const auth = getAuth(app); 
export const db = getFirestore(app);