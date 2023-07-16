$(document).ready(function () {
  "use strict";

  // open sidenave in mobile
  $(".navbar-mobile .toggle").on("click", function () {
    $(".sidenav").toggleClass("open");
  });
  // colse sidenave in mobile
  $(".sidenav .colse").on("click", function () {
    $(".sidenav").toggleClass("open");
  });

  $(".owl-clients").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    navText: [
      '<img src="./img/arrow-left.png">',
      '<img src="./img/arrow-right.png">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".owl-members").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    
    navText: [
      '<i class="fa-solid fa-chevron-left fa-2x"></i>',
      '<i class="fa-solid fa-chevron-right fa-2x "></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(document).ready(function() {
    $('.owl-members').addClass('loaded');
  });
});

let newsFlashText = document.querySelector(".news-content");
newsFlashText.addEventListener("mouseover", () => {
  newsFlashText.style.animationPlayState = "paused";
});
newsFlashText.addEventListener("mouseout", () => {
  newsFlashText.style.animationPlayState = "running";
});


// JavaScript to trigger the animation
const itemServElements = document.querySelectorAll('.right-box .item-serv');
const windowHeight = window.innerHeight;

function animateOnScroll() {
  itemServElements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    if (elementPosition < windowHeight * 0.8) {
      element.classList.add('show');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);


function toggleLanguage() {
  var languageOptions = document.getElementById("language-options");
  if (languageOptions.style.display === "none") {
      languageOptions.style.display = "block";
  } else {
      languageOptions.style.display = "none";
  }
}

function moveLanguageToSidenav() {
  var languageContainer = document.querySelector(".navbar-en .language");
  var sidenav = document.querySelector(".sidenav ul");

  sidenav.appendChild(languageContainer);
}

window.addEventListener("DOMContentLoaded", function() {
  var screenWidth = window.innerWidth;
  if (screenWidth <= 768) {
      moveLanguageToSidenav();
  }
});

window.addEventListener("resize", function() {
  var screenWidth = window.innerWidth;
  if (screenWidth <= 768) {
      moveLanguageToSidenav();
  } else {
      var sidenavLanguageContainer = document.querySelector(".sidenav .language");
      var navbarLanguageContainer = document.querySelector(".navbar-en .links ul li .language");
      navbarLanguageContainer.appendChild(sidenavLanguageContainer);
  }
});
