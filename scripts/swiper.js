var swiper = new Swiper(".plane__swiper", {
  slidesPerView: 1,
  spaceBetween: 60,
  grabCursor: true,
  navigation: {
    nextEl: ".plane__swiper-button_next",
    prevEl: ".plane__swiper-button_prev",
  },
  pagination: {
    el: ".plane__pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
});
