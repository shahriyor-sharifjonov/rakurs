const search = document.querySelector('.header-bot__search');
const btn = document.querySelector('.header-bot__search-btn_2');
btn.addEventListener('click', () => {
    search.classList.add('active');
})
window.addEventListener('click', (e) => {
    if ( !e.composedPath().includes(btn) && !e.composedPath().includes(search) ){
        search.classList.remove('active');
    }
})
var swiper = new Swiper(".slider__content     ", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });