// Get the current year
const getYear = () => {
    document.getElementById('year').innerHTML = new Date().getFullYear();
}
getYear();

const swiper = new Swiper('.swiper', {
    speed: 5000,
    spaceBetween: 0,
    centeredSlides: true,
    centeredSlidesBounds: false,
    spaceBetween: 40,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 4
      },
    },
    lazyPreloadPrevNext: 4,
    freeMode: {
        enabled: true,
      },
    effect: "slide",
     mousewheel: {
        inverse: true,
      },
    controller: {
        inverse: true,
      },
      followFinger: true,
    loop: true,
    slideToClickedSlide: true,
    threshold: 5,
    toucheReleaseOnEdges: true,
    allowTouchMove: true,
    cssmode: true
  });

  
  window.addEventListener('scroll', function() {
    const slideHeight = 250; // Hauteur des diapositives
    const scrollTop = window.scrollY;
    const slideIndex = Math.round(scrollTop / slideHeight);
    swiper.slideTo(slideIndex);
  });