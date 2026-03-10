document.querySelector(".submit").addEventListener("click", function () {

let company = document.getElementById("companyFilter").value.toLowerCase();
let location = document.getElementById("locationFilter").value.toLowerCase();
let experience = document.getElementById("experienceFilter").value.toLowerCase();
let mode = document.getElementById("modeFilter").value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

let text = card.innerText.toLowerCase();

let show = true;

if(company && !text.includes(company)) show = false;
if(location && !text.includes(location)) show = false;
if(experience && !text.includes(experience)) show = false;
if(mode && !text.includes(mode)) show = false;

card.style.display = show ? "flex" : "none";

});

});