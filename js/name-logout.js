import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut, updateProfile } 
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const navUser = document.getElementById("navUser");
const welcomeText = document.getElementById("welcomeText");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, async (user) => {
  if (user) {

    // 🔥 FIX old users (no displayName)
    if (!user.displayName) {
      const savedName = localStorage.getItem("username");
      if (savedName) {
        await updateProfile(user, {
          displayName: savedName
        });
      }
    }

    const name =
      user.displayName ||
      localStorage.getItem("username") ||
      "User";

    if (navUser) navUser.textContent = "Hello, " + name;
    if (welcomeText) welcomeText.textContent = "Hello, " + name;

    if (loginBtn) loginBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";

  } else {
    if (navUser) navUser.textContent = "Hello, User";
    if (welcomeText) welcomeText.textContent = "Hello User";

    if (loginBtn) loginBtn.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "none";
  }
});

// Logout
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    localStorage.removeItem("username");
    window.location.href = "../index.html";
  });
}