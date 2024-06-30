/*HERO SECTION */
window.addEventListener("load", leftload);
function leftload() {
  var reveals = document.querySelectorAll(".left-load");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 0;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("left-load-active");
    } else {
      reveals[i].classList.remove("left-load-active");
    }
  }
}

window.addEventListener("load", rightload);
function rightload() {
  var reveals = document.querySelectorAll(".right-load");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 0;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("right-load-active");
    } else {
      reveals[i].classList.remove("right-load-active");
    }
  }
}

/* THE REST OF THE BODY */
window.addEventListener("scroll", slideRight);
function slideRight() {
  var reveals = document.querySelectorAll(".slide-right");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("slide-right-active");
    } else {
      reveals[i].classList.remove("slide-right-active");
    }
  }
}

window.addEventListener("scroll", slideLeft);
function slideLeft() {
  var reveals = document.querySelectorAll(".slide-left");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("slide-left-active");
    } else {
      reveals[i].classList.remove("slide-left-active");
    }
  }
}

window.addEventListener("scroll", fadein);
function fadein() {
  var reveals = document.querySelectorAll(".fade-in");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("fade-in-active");
    } else {
      reveals[i].classList.remove("fade-in-active");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.querySelector(".hamburger");
  const navbarOpen = document.querySelector(".navbar-open");

  /* TOGGLE MENU AND HAMBURGER BUTTON STATE WHEN THE BUTTON IS CLICKED */
  hamburgerButton.addEventListener("click", function () {
    hamburgerButton.classList.toggle("active");
    navbarOpen.classList.toggle("visible");
  });
});
