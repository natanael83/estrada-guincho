import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAabyLOBvZQp0kg1G1KkwViU4o_E4lzO2g",
  authDomain: "estrada-guincho-2026.firebaseapp.com",
  projectId: "estrada-guincho-2026",
  storageBucket: "estrada-guincho-2026.firebasestorage.app",
  messagingSenderId: "97046042013",
  appId: "1:97046042013:web:e6dcde33d2c478bbd20b74",
  measurementId: "G-7YXY1Y1Y1Y" // Placeholder for measurementId if not in previous output
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
