const bodyColor = document.querySelector('body');
const theNavContainer = document.querySelector('#nav');
const menuBtn = document.querySelector('#menu__nav');
const mainNav = document.querySelector('#main__nav');
const navToggle = document.querySelector('.nav--toggle');

menuBtn.addEventListener('click', () => {
//  bodyColor.style.background = 'lime'
    mainNav.classList.toggle('nav--toggle');
    // alert('pressed');
});

