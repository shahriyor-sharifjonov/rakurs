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


// if (menuOpened && !e.composedPath().includes(headerButton) && !e.composedPath().includes(headerMenu)){
//     menuToggle();
// }