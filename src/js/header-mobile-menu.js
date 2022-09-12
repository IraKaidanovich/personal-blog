const burgerEl = document.querySelector('.header-menu__burger');
const menuEl = document.querySelector('.header-mobile-menu'); 

burgerEl.onclick = () => menuEl.classList.toggle ('is-active');

document.addEventListener('click', (event) => {
  const targetEl = event.target; 

  if (targetEl.closest('.header-mobile-menu') || targetEl.classList.contains('header-mobile-menu')) return; 
  if (targetEl.closest('.header-menu__burger') || targetEl.classList.contains('header-menu__burger')) return;
  if (targetEl.closest('.contact-mobal') || targetEl.classList.contains('contact-mobal')) return; 

  menuEl.classList.remove('is-active');
})