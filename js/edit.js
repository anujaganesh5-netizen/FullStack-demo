// js/edit.js
import { auth, db } from "./firebase.js";

import { onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

import { doc, getDoc, setDoc } 
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

let userRef;

onAuthStateChanged(auth, async (user) => {

  userRef = doc(db, "users", user.uid);

  const snap = await getDoc(userRef);

  if (snap.exists()) {
    const data = snap.data();

    document.getElementById("name").value = data.name;
    document.getElementById("bio").value = data.bio;
    document.getElementById("location").value = data.location;
    document.getElementById("skills").value = data.skills.join(",");
  }
});

document.getElementById("saveBtn").addEventListener("click", async () => {

  await setDoc(userRef, {
    name: document.getElementById("name").value,
    bio: document.getElementById("bio").value,
    location: document.getElementById("location").value,
    skills: document.getElementById("skills").value.split(","),

    education: [{
      title: document.getElementById("eduTitle").value,
      subtitle: document.getElementById("eduSub").value,
      duration: document.getElementById("eduDur").value
    }],

    experience: [{
      role: document.getElementById("role").value,
      company: document.getElementById("company").value,
      duration: document.getElementById("expDur").value
    }]
  });

  alert("Profile Updated!");
  window.location.href = "profile.html";
});