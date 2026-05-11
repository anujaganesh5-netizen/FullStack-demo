import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, updateProfile }
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const form = document.getElementById("signupForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const name = document.getElementById("signupName").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;


    await updateProfile(user, {
      displayName: name
    });

    // optional
    localStorage.setItem("username", name);

    alert("Signup successful!");
    window.location.href = "../pages/login.html";

  } catch (error) {
    alert(error.message);
  }
});