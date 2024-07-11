"use strict";

// script.js
// const btnMobileNav = document.querySelector('.btn-mobile-nav');
// const navBar = document.querySelector('.nav-bar');
// const header = document.querySelector('.header');
// const headerEl=document.getElementsByTagName('header');
// btnMobileNav.addEventListener('click', function() {
//     header.classList.toggle('nav-open');
//     headerEl.classList.toggle('nav-open');
// });



// document.addEventListener('DOMContentLoaded', () => {
//     const hamburger = document.querySelector('.btn-mobile-nav');
//     const navMenu = document.querySelector('.nav-bar');
//     const icons = document.querySelectorAll('.icon-mobile-nav');

//     if (hamburger) {
//         hamburger.addEventListener('click', () => {
//             navMenu.classList.toggle('nav-open');
//             icons.forEach(icon => icon.classList.toggle('icon-visible'));
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.btn-mobile-nav');
    const navMenu = document.querySelector('.nav-bar');
    const header = document.querySelector('.header') || document.querySelector('header');
    const icons = document.querySelectorAll('.icon-mobile-nav');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            header.classList.toggle('nav-open');
            icons.forEach(icon => icon.classList.toggle('icon-visible'));
        });
    }
});
