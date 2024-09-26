document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector('.nav__menu__btn');
    const navLinks = document.querySelector('.nav__links');

    menuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });
});
