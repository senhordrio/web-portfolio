//components
var home = document.querySelector("#home");
var about = document.querySelector("#about");
var projects = document.querySelector("#projects");
var contact = document.querySelector(".contact");
var contactButtons = document.querySelectorAll(".buttonEffect");
var loader = document.querySelector(".loader");

//buttons
var navigateToAbout = document.querySelector(".navigateToAbout");
var navigateToProjects = document.querySelector(".navigateToProjects");
var navigateToHomeFromProjects = document.querySelector(".navigateToHomeFromProjects");
var navigateToHomeFromAbout = document.querySelector(".navigateToHomeFromAbout");


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
  if(window.screen.width <= 1366){
    contact.style.left = "47%";
    contact.style.top = "62%";
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
