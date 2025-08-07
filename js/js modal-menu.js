const mobileMenu = document.querySelector('.backdrop');
const menuBtnOpen = document.querySelector('.modal-btn-open');
const menuBtnClose = document.querySelector('.modal-btn-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-hidden');
const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

menuBtnOpen.addEventListener('click', disableScroll);
menuBtnClose.addEventListener('click', disableScroll);
