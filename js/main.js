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
    el: ".homeAnimation",
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

  $loader.hide();
  $home.fadeIn("1000");
  $contactComponent.fadeIn("1000");

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
    $contactPosition.css({ left: "200px" });
    $bodyBackground
      .removeClass("bodyBlackBackgroundColor")
      .addClass("bodyWhiteBackgroundColor");
    $contactColors.removeClass("buttonEffectOnAbout").addClass("buttonEffect");
    $home.removeClass("fadeInLoader").fadeIn();
    $home.show();
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
    $home.addClass("fadeIn");
    $home.show();
    $contactComponent.removeClass("fadeInLoader").fadeIn();
    $contactComponent.show();
  });
});
