//components
var $home = $("#home");
var $about = $("#about");
var $projects = $("#projects");
var $contactComponent = $(".contact");
var $loader = $(".loader");

//animations
var $bodyBackground = $(".bodyWhiteBackgroundColor");

//buttons
var $navigateToAbout = $(".navigateToAbout");
var $navigateToProjects = $(".navigateToProjects");
var $navigateToHomeFromProjects = $(".navigateToHomeFromProjects");
var $navigateToHomeFromAbout = $(".navigateToHomeFromAbout");
var $contactPosition = $(".contact");
var $contactColors = $(".buttonEffect");

//methods

$(document).ready(function () {
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

  $home.fadeIn(800);
  $contactComponent.fadeIn(800);
  $loader.fadeOut(100);

  $navigateToAbout.click(function () {
    $home.hide();
    $bodyBackground
      .removeClass("bodyWhiteBackgroundColor")
      .addClass("bodyBlackBackgroundColor");
    $about.show();
    $contactPosition.css({ transition: "0.2s", left: "435px" });
    $contactColors.removeClass("buttonEffect").addClass("buttonEffectOnAbout");
  });

  $navigateToHomeFromAbout.click(function () {
    $about.hide();
    $contactPosition.css({ left: "15%" });
    $bodyBackground
      .removeClass("bodyBlackBackgroundColor")
      .addClass("bodyWhiteBackgroundColor");
    $contactColors.removeClass("buttonEffectOnAbout").addClass("buttonEffect");
    $home.fadeIn();
  });

  $navigateToProjects.click(function () {
    $home.hide();
    $bodyBackground
      .removeClass("bodyWhiteBackgroundColor")
      .addClass("bodyBlackBackgroundColor");
    $contactComponent.hide();
    $projects.show();
  });

  $navigateToHomeFromProjects.click(function () {
    $projects.hide();
    $bodyBackground
      .removeClass("bodyBlackBackgroundColor")
      .addClass("bodyWhiteBackgroundColor");
    $contactColors.removeClass("buttonEffectOnAbout").addClass("buttonEffect");
    $home.fadeIn();
    $home.show();
    $contactComponent.fadeIn();
  });
});
