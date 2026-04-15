import { auth } from "./firebase.js";
import { signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);

    // ✅ NEW REDIRECT LOGIC
    const redirectPage = localStorage.getItem("redirectAfterLogin");

    if (redirectPage) {
      localStorage.removeItem("redirectAfterLogin");
      window.location.href = redirectPage;
    } else {
      window.location.href = "../index.html";
    }

  } catch (error) {
    alert(error.message);
  }
});