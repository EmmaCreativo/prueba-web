// Animaciones--------------------------------------------------------------
// Indicador del scroll
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Código de Swiper JS--------------------------------------------------------------
// card de cada post y articulo
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1.5,
  spaceBetween: 30,
  // centeredSlides: true,
  
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
        640: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        // 768: {
        //   slidesPerView: 4,
        //   spaceBetween: 40,
        // },
        // 1024: {
        //   slidesPerView: 5,
        //   spaceBetween: 50,
        // },
  }
});

// sesion del personaje de la semana
var swiper2 = new Swiper('.personaje', {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  simulateTouch: true,
  pagination: {
    el: '.personaje-bullets',
    dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
    1024:{
      loop:true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }
});

var flecha = document.querySelector(".swiper-button-next");
flecha.style.color = "white";
var flecha2 = document.querySelector(".swiper-button-prev");
flecha2.style.color = "white";
// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   // init: false,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 5,
//       spaceBetween: 50,
//     },
//   }
// });