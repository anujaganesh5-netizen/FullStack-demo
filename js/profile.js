// PROFILE ELEMENTS
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
window.addEventListener("DOMContentLoaded", () => {

  profileName.textContent = localStorage.getItem("name") || "User Name";
  profileBio.textContent = localStorage.getItem("bio") || "Your bio";
  profileLocation.textContent = localStorage.getItem("location") || "Location";
  profileCompany.textContent = localStorage.getItem("company") || "Company";

  education1.textContent = localStorage.getItem("education1") || "Add education";
  education2.textContent = localStorage.getItem("education2") || "";
  skills.textContent = localStorage.getItem("skills") || "Add skills";
  experience.textContent = localStorage.getItem("experience") || "Add experience";
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

  // Save to localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("bio", bio);
  localStorage.setItem("location", locationVal);
  localStorage.setItem("company", companyVal);

  localStorage.setItem("education1", edu1);
  localStorage.setItem("education2", edu2);
  localStorage.setItem("skills", skillVal);
  localStorage.setItem("experience", expVal);

  // Update UI instantly
  profileName.textContent = name;
  profileBio.textContent = bio;
  profileLocation.textContent = locationVal;
  profileCompany.textContent = companyVal;

  education1.textContent = edu1;
  education2.textContent = edu2;
  skills.textContent = skillVal;
  experience.textContent = expVal;

  // Hide form
  editForm.style.display = "none";
});
