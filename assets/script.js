// Smooth scroll effect

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});

});

});


// Navbar background on scroll

window.addEventListener("scroll", function(){

let header = document.querySelector("header");

header.classList.toggle("sticky", window.scrollY > 50);

});


// Count down

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

const updateCount = () => {

const target = +counter.getAttribute('data-target');
const current = +counter.innerText;

const increment = target / 80;

if(current < target){

counter.innerText = Math.ceil(current + increment);

setTimeout(updateCount, 20);

}else{

counter.innerText = target + "+";

}

};

updateCount();

});


// ABOUT PAGE

// Smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});

});

});

// PROGRAM PAGE 

const programCards = document.querySelectorAll(".program-card");

window.addEventListener("scroll", () => {

const trigger = window.innerHeight * 0.85;

programCards.forEach(card => {

const top = card.getBoundingClientRect().top;

if(top < trigger){
card.style.opacity = "1";
card.style.transform = "translateY(0)";
}

});

});


// STORIES PAGE

const storyCards = document.querySelectorAll(".story-card");

window.addEventListener("scroll", () => {

const trigger = window.innerHeight * 0.85;

storyCards.forEach(card => {

const top = card.getBoundingClientRect().top;

if(top < trigger){
card.style.opacity = "1";
card.style.transform = "translateY(0)";
}

});

});

// CONTACT PAGE

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you for contacting IPF. We will respond shortly.");

form.reset();

});

}


// COPY ACCOUNT NUMBER

function copyAccount(){

const account = document.getElementById("accountNumber").innerText;

navigator.clipboard.writeText(account).then(function(){

const btn = document.querySelector(".copy-btn");

btn.innerText = "Copied!";

setTimeout(function(){
btn.innerText = "Copy Account Number";
},2000);

});

}


// SCROLL REVEAL ANIMATION

window.addEventListener("scroll", reveal);

function reveal(){

let reveals = document.querySelectorAll(".reveal");

for(let i = 0; i < reveals.length; i++){

let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let elementVisible = 100;

if(elementTop < windowHeight - elementVisible){
reveals[i].classList.add("active");
}

}

}

// MOBILE MENU

const menuBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function(){

navMenu.classList.toggle("active");
menuBtn.classList.toggle("active");

});
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
link.addEventListener("click", () => {
navMenu.classList.remove("active");
});
});

function showLoader() {

document.getElementById("btnText").style.display = "none";
document.getElementById("loader").style.display = "inline-block";

}

function copyAccount(){

const accountNumber =
document.getElementById("accountNumber").innerText;

navigator.clipboard.writeText(accountNumber);

const msg = document.getElementById("copyMessage");
msg.innerText = "Account Number Copied!";
msg.style.color = "green";

setTimeout(() => {
msg.innerText = "";
},2000);

}

// EMAIL SESSION

function sendDonation(e){

e.preventDefault();

showLoader();

const params = {

name: document.querySelector('input[name="name"]').value,
email: document.querySelector('input[name="email"]').value

};

emailjs.send(
"service_wpvq2th",
"template_xzyrtot",
params
)

.then(function(){

// hide loader
document.getElementById("loader").style.display = "none";
document.getElementById("btnText").style.display = "inline";

// show success message
document.getElementById("successMessage").style.display = "block";

// show modal (if you added it)
if(typeof showModal === "function"){
showModal();
}

// reset form
document.querySelector(".donation-proof").reset();

// hide receipt preview if it exists
const preview = document.getElementById("receiptImage");
if(preview){
preview.style.display = "none";
}

})

.catch(function(error){

// stop loader
document.getElementById("loader").style.display = "none";
document.getElementById("btnText").style.display = "inline";

alert("Failed to send confirmation. Please try again.");

console.log(error);

});

}



document.getElementById("receiptUpload").addEventListener("change", function(event){

const file = event.target.files[0];
const preview = document.getElementById("receiptImage");

if(file){

preview.src = URL.createObjectURL(file);
preview.style.display = "block";

}

});


function showModal(){

document.getElementById("donationModal").style.display="flex";

}

function closeModal(){

document.getElementById("donationModal").style.display="none";

}
