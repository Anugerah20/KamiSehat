const menuHamburger = document.querySelector('.hamburger');
const navLink       = document.querySelector('.nav-link');

menuHamburger.addEventListener('click', () => {
     menuHamburger.classList.toggle('is-active');

     navLink.classList.toggle('nav-active');
});