const burgerEl = document.querySelector('.header-menu__burger');
const menuEl = document.querySelector('.header-mobile-menu'); 
//const contactMobalBody = document.querySelector('.contact-mobal__body');

burgerEl.onclick = () => menuEl.classList.toggle ('is-active');

document.addEventListener('click', (event) => {
  const targetEl = event.target; 

  if (targetEl.closest('.header-mobile-menu') || targetEl.classList.contains('header-mobile-menu')) return; 
  if (targetEl.closest('.header-menu__burger') || targetEl.classList.contains('header-menu__burger')) return;
  //if (targetEl.closest('.contact-mobal__body') || targetEl.classList.contains('contact-mobal__body')) return; 

  menuEl.classList.remove('is-active');

})