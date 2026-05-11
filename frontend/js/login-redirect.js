import { auth } from "./firebase.js";
import { onAuthStateChanged }
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
.html", "login.
const publicPages = ["indexhtml", "signup.html"];

const currentPage = window.location.pathname.split("/").pop();

onAuthStateChanged(auth, (user) => {
  if (!user) {
    if (!publicPages.includes(currentPage)) {

      // save page
      localStorage.setItem("redirectAfterLogin", currentPage);

      // redirect
      window.location.href = "../pages/login.html";
    }
  }
});