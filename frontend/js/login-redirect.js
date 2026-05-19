import { auth } from "./firebase.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";


const publicPages = [
  "index.html",
  "login.html",
  "signup.html"
];



const currentPage = window.location.pathname.split("/").pop();



onAuthStateChanged(auth, (user) => {

  if (!user) {

  
    if (!publicPages.includes(currentPage)) {

    
      localStorage.setItem("redirectAfterLogin", currentPage);

    
      window.location.href = "../pages/login.html";
    }
  }
});