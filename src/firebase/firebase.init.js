// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcfwv9HQSSU3u5nsauQ6OfruFAIJNo7LA",
  authDomain: "education-better.firebaseapp.com",
  projectId: "education-better",
  storageBucket: "education-better.appspot.com",
  messagingSenderId: "510664513712",
  appId: "1:510664513712:web:631477619eed3c18dec375",
  measurementId: "G-3YWCLWH1KC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;