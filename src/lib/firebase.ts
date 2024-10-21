import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAGLJY--ughZwHFrJSRZ7oAeoSaw2A2lFM",
  authDomain: "anksproject1-d1334.firebaseapp.com",
  projectId: "anksproject1-d1334",
  storageBucket: "anksproject1-d1334.appspot.com",
  messagingSenderId: "881489936761",
  appId: "1:881489936761:web:26345f39199f9fe6bc6fa8",
  measurementId: "G-V1ED391DPS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };