const hamburgerBtn = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

hamburgerBtn.addEventListener('click', () => {
  console.log('btn clicked');
  if (header.classList.contains('open')) {
    body.classList.remove('noscroll');

    header.classList.remove('open'); //close hamburger
    fadeElems.forEach((e) => {
      e.classList.remove('fade-in');
      e.classList.add('fade-out');
    });
  } else {
    body.classList.add('noscroll');
    header.classList.add('open'); //open hamburger
    fadeElems.forEach((e) => {
      e.classList.remove('fade-out');
      e.classList.add('fade-in');
    });
  }
});
