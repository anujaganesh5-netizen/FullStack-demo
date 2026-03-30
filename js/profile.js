// js/profile.js
import { auth, db } from "./firebase.js";

import { onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

import { doc, getDoc } 
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const docRef = doc(db, "users", user.uid);
  const snap = await getDoc(docRef);

  if (snap.exists()) {
    const data = snap.data();

    document.getElementById("name").innerText = data.name;
    document.getElementById("bio").innerText = data.bio;
    document.getElementById("location").innerText = data.location;

    document.getElementById("skills").innerText = data.skills.join(" · ");

    // Education
    const eduDiv = document.getElementById("education");
    eduDiv.innerHTML = "";

    data.education.forEach(e => {
      eduDiv.innerHTML += `
        <p><b>${e.title}</b><br>${e.subtitle}<br>${e.duration}</p>
      `;
    });

    // Experience
    const expDiv = document.getElementById("experience");
    expDiv.innerHTML = "";

    data.experience.forEach(e => {
      expDiv.innerHTML += `
        <p><b>${e.role}</b><br>${e.company}<br>${e.duration}</p>
      `;
    });

  }
});