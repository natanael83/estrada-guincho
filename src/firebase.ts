import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0kSIQDot90mO49s3gXpu4V4UUIXZVlSk",
  authDomain: "estradaguincho.firebaseapp.com",
  projectId: "estradaguincho",
  storageBucket: "estradaguincho.firebasestorage.app",
  messagingSenderId: "628334867557",
  appId: "1:628334867557:web:a317226f60f40cd2e1c28c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
