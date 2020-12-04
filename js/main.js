//components
let home = document.querySelector("#home");
let about = document.querySelector("#about");
let projects = document.querySelector("#projects");
let contact = document.querySelector(".contact");
let contactButtons = document.querySelectorAll(".buttonEffect");
let loader = document.querySelector(".loader");

//buttons
let navigateToAbout = document.querySelector(".navigateToAbout");
let navigateToProjects = document.querySelector(".navigateToProjects");
let navigateToHomeFromProjects = document.querySelector(".navigateToHomeFromProjects");
let navigateToHomeFromAbout = document.querySelector(".navigateToHomeFromAbout");


VANTA.NET({
  el: ".animationWrapper",
  mouseControls: true,
  touchControls: true,
  minHeight: 400.0,
  minWidth: 440.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x0,
  points: 5.0,
  maxDistance: 20.0,
  spacing: 8.0,
  color: 0xffffff,
  backgroundColor: 0x0,
  showDots: true,
});


home.style.display = "block";
contact.style.display = "block";
loader.style.display = "none";


navigateToAbout.addEventListener("click", function () {
  if(window.screen.width <= 1280){
    contact.style.display = "none";
  }
  home.style.display = "none";
  document.body.style.backgroundColor = "black";
  about.style.display = "block";
  if(window.screen.width <= 1920){
    contact.style.left = "42%";
  }
  if(window.screen.width <= 1600){
    contact.style.left = "44%";
  }
  if(window.screen.width <= 1366){
    contact.style.left = "47%";
  }
  let contactLength = contactButtons.length;
  for(let i = 0; i < contactLength; i++){
    contactButtons[i].classList.remove("buttonEffect");
    contactButtons[i].classList.add("buttonEffectAbout");
  }
});

navigateToHomeFromAbout.addEventListener("click", function () {
  contact.style.display = "block"
  about.style.display = "none";
  document.body.style.backgroundColor = "#eaeaea"
  home.style.display = "block"
  contact.style.left = "15%";
  let contactLength = contactButtons.length;
  for(let i = 0; i < contactLength; i++){
    contactButtons[i].classList.remove("buttonEffectAbout");
    contactButtons[i].classList.add("buttonEffect");
  }
});

navigateToProjects.addEventListener("click", function () {
  home.style.display = "none";
  document.body.style.backgroundColor = "black"
  contact.style.display = "none";
  projects.style.display = "block";
});

navigateToHomeFromProjects.addEventListener("click",  function () {
  projects.style.display = "none";
  document.body.style.backgroundColor = "#eaeaea"
  home.style.display = "block"
  contact.style.display = "block";
});

let botaoSubir = document.querySelector(".botaoSubir");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    botaoSubir.style.display = "block";
  } else {
    botaoSubir.style.display = "none";
  }
}

function subir() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}