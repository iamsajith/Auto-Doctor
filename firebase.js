  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCpvYXGtevmREB1kwZV0n7jf_yYvE7iWTM",
    authDomain: "auto-doctor-7cd33.firebaseapp.com",
    projectId: "auto-doctor-7cd33",
    storageBucket: "auto-doctor-7cd33.appspot.com",
    messagingSenderId: "812135743704",
    appId: "1:812135743704:web:754e4ca697ca38c98057ad",
    measurementId: "G-T8R2C1L04G"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);