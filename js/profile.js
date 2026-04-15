// PROFILE ELEMENTS
import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const profileName = document.getElementById("profileName");
const profileBio = document.getElementById("profileBio");
const profileLocation = document.getElementById("profileLocation");
const profileCompany = document.getElementById("profileCompany");

const education1 = document.getElementById("education1");
const education2 = document.getElementById("education2");
const skills = document.getElementById("skills");
const experience = document.getElementById("experience");

// BUTTONS & FORM
const editBtn = document.getElementById("editBtn");
const editForm = document.getElementById("editForm");
const saveBtn = document.getElementById("saveBtn");

// INPUTS
const editName = document.getElementById("editName");
const editBio = document.getElementById("editBio");
const editLocation = document.getElementById("editLocation");
const editCompany = document.getElementById("editCompany");

const editEducation1 = document.getElementById("editEducation1");
const editEducation2 = document.getElementById("editEducation2");
const editSkills = document.getElementById("editSkills");
const editExperience = document.getElementById("editExperience");


//  LOAD DATA WHEN PAGE OPENS

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;

    profileName.textContent = localStorage.getItem(uid + "_name") || "User Name";
    profileBio.textContent = localStorage.getItem(uid + "_bio") || "Your bio";
    profileLocation.textContent = localStorage.getItem(uid + "_location") || "Location";
    profileCompany.textContent = localStorage.getItem(uid + "_company") || "Company";

    education1.textContent = localStorage.getItem(uid + "_education1") || "Add education";
    education2.textContent = localStorage.getItem(uid + "_education2") || "";
    skills.textContent = localStorage.getItem(uid + "_skills") || "Add skills";
    experience.textContent = localStorage.getItem(uid + "_experience") || "Add experience";
  }
});

//  OPEN EDIT FORM
editBtn.addEventListener("click", () => {
  editForm.style.display = "block";

  // Pre-fill inputs with existing data
  editName.value = localStorage.getItem("name") || "";
  editBio.value = localStorage.getItem("bio") || "";
  editLocation.value = localStorage.getItem("location") || "";
  editCompany.value = localStorage.getItem("company") || "";

  editEducation1.value = localStorage.getItem("education1") || "";
  editEducation2.value = localStorage.getItem("education2") || "";
  editSkills.value = localStorage.getItem("skills") || "";
  editExperience.value = localStorage.getItem("experience") || "";
});

const closeForm = document.getElementById("closeForm");

// open
editBtn.addEventListener("click", () => {
  editForm.classList.add("active");
});

// close
closeForm.addEventListener("click", () => {
  editForm.classList.remove("active");
});

// after save
saveBtn.addEventListener("click", () => {
  editForm.classList.remove("active");
});
//  SAVE DATA
saveBtn.addEventListener("click", () => {

  // Get values
  const name = editName.value;
  const bio = editBio.value;
  const locationVal = editLocation.value;
  const companyVal = editCompany.value;

  const edu1 = editEducation1.value;
  const edu2 = editEducation2.value;
  const skillVal = editSkills.value;
  const expVal = editExperience.value;


  saveBtn.addEventListener("click", () => {
  const user = auth.currentUser;
  if (!user) return;

  const uid = user.uid;

  localStorage.setItem(uid + "_name", editName.value);
  localStorage.setItem(uid + "_bio", editBio.value);
  localStorage.setItem(uid + "_location", editLocation.value);
  localStorage.setItem(uid + "_company", editCompany.value);

  localStorage.setItem(uid + "_education1", editEducation1.value);
  localStorage.setItem(uid + "_education2", editEducation2.value);
  localStorage.setItem(uid + "_skills", editSkills.value);
  localStorage.setItem(uid + "_experience", editExperience.value);

  // update UI
  profileName.textContent = editName.value;
  profileBio.textContent = editBio.value;
  profileLocation.textContent = editLocation.value;
  profileCompany.textContent = editCompany.value;

  education1.textContent = editEducation1.value;
  education2.textContent = editEducation2.value;
  skills.textContent = editSkills.value;
  experience.textContent = editExperience.value;

  editForm.style.display = "none";
});

  // Hide form
  editForm.style.display = "none";
});
