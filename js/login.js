
//    🔐 SIGNUP SECTION (With Confirm Password Validation)


const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    const user = { name, email, password };

    localStorage.setItem(email, JSON.stringify(user));

    alert("✅ Signup Successful! Please Login.");
    window.location.href = "./pages/login.html";
  });
}



//    🔑 LOGIN SECTION (Remember Me Required)


const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    // Require Remember Me checkbox
    if (!rememberMe) {
      alert("⚠ Please check 'Remember Me' to login.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser && storedUser.password === password) {
      localStorage.setItem("loggedInUser", storedUser.name);

      // Redirect to your existing home page
      window.location.href = "../index.html";
    } else {
      alert("❌ Invalid Email or Password");
    }
  });
}



//    🏠 PROTECT INDEX PAGE (Prevent Manual Access)


if (window.location.pathname.includes("../index.html")) {
  const user = localStorage.getItem("loggedInUser");

  if (!user) {
    window.location.href = "./pages/login.html";
  }
}



//    👋 SHOW USERNAME IN INDEX PAGE


const welcomeUser = document.getElementById("welcomeUser");

if (welcomeUser) {
  const name = localStorage.getItem("loggedInUser");
  welcomeUser.textContent = "Welcome, " + name + " 👋";
}


//    🚪 LOGOUT FUNCTION


function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "./pages/login.html";
}



//    🔁 FORGOT PASSWORD FUNCTION


function forgotPassword() {
  const email = prompt("Enter your registered email:");

  if (!email) return;

  const storedUser = JSON.parse(localStorage.getItem(email));

  if (storedUser) {
    alert("🔐 Your password is: " + storedUser.password);
  } else {
    alert("❌ Email not found!");
  }
}