const burgerEl = document.querySelector('.header-menu__burger');
const menuEl = document.querySelector('.header-mobile-menu');
const contactMobal = document.querySelector('.contact-mobal');
const contactSidebar = document.querySelector('.sidebar__button--contact-me');
const contactHeaderMobileMenu = document.querySelector('.header-mobile-menu--contact-me');
const finish = document.querySelector('.contact-mobal__close');


burgerEl.onclick = () => menuEl.classList.toggle('active');
contactSidebar.onclick = () => contactMobal.classList.toggle('open');
contactHeaderMobileMenu.onclick = () => contactMobal.classList.toggle('open');
finish.onclick = () => contactMobal.classList.remove('open');

document.addEventListener('click', (event) => {
  const targetEl = event.target; 

  if (targetEl.closest('.header-mobile-menu') || targetEl.classList.contains('header-mobile-menu')) return; 
  if (targetEl.closest('.header-menu__burger') || targetEl.classList.contains('header-menu__burger')) return;
  if (targetEl.closest('.contact-mobal__close') || targetEl.classList.contains('contact-mobal__close')) return;

  menuEl.classList.remove('active');
})




///burgerEl.addEventListener('click', () => {
  //menuEl.classList.toggle('active');
  //burgerEl.classList.toggle('active');
//})

//document.querySelectorAll('.header-mobile-menu').addEventListener('click', () => {
  //menuEl.classList.remove('active');
  //burgerEl.classList.remove('active');
//})