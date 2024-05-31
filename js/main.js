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

const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const leftButton = document.querySelector(".carousel__button--left");
const rightButton = document.querySelector(".carousel__button--right");
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children)

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides next to one another

// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
// slides[3].style.left = slideWidth * 3 + 'px';
// slides[4].style.left = slideWidth * 4 + 'px';
// slides[5].style.left = slideWidth * 5 + 'px';
// slides[6].style.left = slideWidth * 6 + 'px';
// slides[7].style.left = slideWidth * 7 + 'px';

function setSlidePosition(slide, index) {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

function moveToSlide(track, currentSlide, targetSlide) {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

// when I click left, move to the left

leftButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.previousElementSibling
    // move to the next slide
    const amountToMove = nextSlide.style.left;
    moveToSlide(track, currentSlide, nextSlide)

})
// when I click right, move to the right

rightButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling
    // move to the next slide
    const amountToMove = nextSlide.style.left;
    moveToSlide(track, currentSlide, nextSlide)

})

// when I click the nav indicators. move to that slide

// dotsNav.addEventListener('click', e => {
//     // e is the target/ element that was clicked
//     const targetDot = e.closest('button');
//     const currentSlide = track.querySelector('.current-slide');
//     const currentDot = dotsNav.querySelector('.current-slide');

//     const targetIndex = dots.findIndex(e => e === targetDot);
//     console.log(targetDot)

// })

console.log(slides)
console.log(dots)
console.log(slideWidth)
