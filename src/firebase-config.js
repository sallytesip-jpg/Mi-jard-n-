// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdJpvLvdBRMHorMnSMGpeQmMV-Y3D2oE8",
  authDomain: "cultivo-pro.firebaseapp.com",
  projectId: "cultivo-pro",
  storageBucket: "cultivo-pro.firebasestorage.app",
  messagingSenderId: "319779031243",
  appId: "1:319779031243:web:91777e13d0fef81e18f34e",
  measurementId: "G-RPEH24ZKVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
