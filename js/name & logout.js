import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } 
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

// 🔹 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBCRO_Fpy_-dt8s5BgYXaFLv56n1UPGBMY",
  authDomain: "full-stack-project-8a514.firebaseapp.com",
  projectId: "full-stack-project-8a514",
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔹 Get Elements (works for all pages)
const navUser = document.getElementById("navUser");
const welcomeText = document.getElementById("welcomeText");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

// 🔹 Auth State Listener
onAuthStateChanged(auth, (user) => {

  if (user) {

    const name = user.displayName || user.email || "User";

    // ✅ Navbar
    if (navUser) {
      navUser.innerText = "Hello, " + name;
    }

    // ✅ Body
    if (welcomeText) {
      welcomeText.innerText = "Hello, " + name;
    }

    // ✅ Buttons
    if (loginBtn) loginBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";

  } else {

    if (navUser) {
      navUser.innerText = "Hello, User";
    }

    if (welcomeText) {
      welcomeText.innerText = "Hello, User";
    }

    if (loginBtn) loginBtn.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "none";

  }

});

// 🔹 Logout Function
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {

    signOut(auth)
      .then(() => {
        alert("Logged out successfully");
        window.location.href = "../pages/login.html";
      })
      .catch((error) => {
        alert(error.message);
      });

  });
}


onAuthStateChanged(auth, (user) => {

  const currentPage = window.location.pathname;

  const publicPages = ["login.html", "signup.html","index.html"];

  const isPublic = publicPages.some(page => currentPage.includes(page));

  // 🔐 BLOCK ACCESS
  if (!user && !isPublic) {
    window.location.href = "../pages/login.html";
    alert("User should login first")
    return;
  }

});