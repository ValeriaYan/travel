const burger = document.querySelector('.header__burger');
const burgerSpan = document.querySelectorAll('.header__burger');
const menu = document.querySelector('.header__navbar');
const navbarClose = document.querySelector('.navbar__x');

burger.addEventListener('click', function() {
    menu.classList.add('_active');
});

navbarClose.addEventListener('click', function() {
    menu.classList.remove('_active');
})

document.addEventListener('click', function(event) {
    if(event.target != menu && event.target.parentElement != menu && event.target != burger && event.target.parentElement != burger && menu.classList.contains('_active')) {
        menu.classList.remove('_active');
        console.log(event.target);
    }
})

