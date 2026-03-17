import { initializeApp,getApps } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCRO_Fpy_-dt8s5BgYXaFLv56n1UPGBMY",
  authDomain: "full-stack-project-8a514.firebaseapp.com",
  projectId: "full-stack-project-8a514",
  storageBucket: "full-stack-project-8a514.firebasestorage.app",
  messagingSenderId: "364401732468",
  appId: "1:364401732468:web:cb5dd6f30c5e8ee2a39a21"
};

// Only initialize if no apps exist
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);


const form = document.getElementById("signupForm");

form.addEventListener("submit", async function(e){

  e.preventDefault();

  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("confirmPassword").value;

  if(password !== confirm){
    alert("Password not match");
    return;
  }

  try {

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

 
    await updateProfile(userCredential.user, {
      displayName: name
      
    });

 

    alert("Signup Successful");

    window.location.href = "login.html";

  } catch(error) {
    alert(error.message);
  }

});