import { initializeApp } 
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";

import { getAuth } 
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

// Your config (this is correct 👍)
const firebaseConfig = {
  apiKey: "AIzaSyBCRO_Fpy_-dt8s5BgYXaFLv56n1UPGBMY",
  authDomain: "full-stack-project-8a514.firebaseapp.com",
  projectId: "full-stack-project-8a514",
  storageBucket: "full-stack-project-8a514.firebasestorage.app",
  messagingSenderId: "364401732468",
  appId: "1:364401732468:web:cb5dd6f30c5e8ee2a39a21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ IMPORTANT
const auth = getAuth(app);

// ✅ EXPORT THIS
export { auth };