import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCRO_Fpy_-dt8s5BgYXaFLv56n1UPGBMY",
  authDomain: "full-stack-project-8a514.firebaseapp.com",
  projectId: "full-stack-project-8a514",
  storageBucket: "full-stack-project-8a514.firebasestorage.app",
  messagingSenderId: "364401732468",
  appId: "1:364401732468:web:cb5dd6f30c5e8ee2a39a21",
};

// Only initialize if no apps exist
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Successful");
      const details = {
        email : email
      }
      localStorage.setItem('user',JSON.stringify(details))
      window.location.href = "../index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});