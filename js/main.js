//components
var home = document.querySelector("#home");
var about = document.querySelector("#about");
var projects = document.querySelector("#projects");
var contactComponent = document.querySelector(".contact");
var loader = document.querySelector(".loader");

//buttons
var navigateToAbout = document.querySelector(".navigateToAbout");
var navigateToProjects = document.querySelector(".navigateToProjects");
var navigateToHomeFromProjects = document.querySelector(".navigateToHomeFromProjects");
var navigateToHomeFromAbout = document.querySelector(".navigateToHomeFromAbout");
var contactColors = document.querySelector(".buttonEffect");

//methods

VANTA.NET({
  el: ".animationWrapper",
  mouseControls: true,
  touchControls: true,
  minHeight: 350.0,
  minWidth: 400.0,
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

loader.style.display = "none";
home.style.display = "block";
contactComponent.style.display = "block";

navigateToAbout.addEventListener("click", function () {
  home.style.display = "none";
  document.body.style.backgroundColor = "black";
  about.style.display = "block";
  contactColors.style.color = "black";
});

navigateToHomeFromAbout.addEventListener("click", function () {
  about.style.display = "none";
  document.body.style.backgroundColor = "#eaeaea"
  home.style.display = "block"
});

navigateToProjects.addEventListener("click", function () {
  home.style.display = "none";
  document.body.style.backgroundColor = "black"
  contactComponent.style.display = "none";
  projects.style.display = "block";
});

navigateToHomeFromProjects.addEventListener("click",  function () {
  projects.style.display = "none";
  document.body.style.backgroundColor = "#eaeaea"
  home.style.display = "block"
  contactComponent.style.display = "block";
});
