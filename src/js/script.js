//header mobile menu 
const burgerEl = document.querySelector('.header-menu__burger');
const menuEl = document.querySelector('.header-mobile-menu');

//contact modal 
const contactMobal = document.querySelector('.contact-mobal');
const contactMobalBody = document.querySelector('.contact-mobal__body');
const contactSidebar = document.querySelector('.sidebar__button--contact-me');
const contactHeaderMobileMenu = document.querySelector('.header-mobile-menu--contact-me');
const finish = document.querySelector('.contact-mobal__close');

//storis video 
const showStoris = document.querySelector('.storis__video');
const closeStoris = document.querySelector('.storis__video-content');
const storis = document.querySelector('.storis__items');


//header mobile menu 
burgerEl.onclick = () => menuEl.classList.toggle ('active');

//contact modal 
contactSidebar.onclick = () => contactMobal.classList.toggle('open');
contactHeaderMobileMenu.onclick = () => contactMobal.classList.toggle('open');
finish.onclick = () => contactMobal.classList.remove('open');

//storis video 
storis.onclick = () => showStoris.classList.toggle('show');


document.addEventListener('click', (event) => {
  const targetEl = event.target; 
  //header mobile menu 
  if (targetEl.closest('.header-mobile-menu') || targetEl.classList.contains('header-mobile-menu')) return; 
  if (targetEl.closest('.header-menu__burger') || targetEl.classList.contains('header-menu__burger')) return;

  //contact modal 
  if (targetEl.closest('.contact-mobal__close') || targetEl.classList.contains('contact-mobal__close')) return;
  if (targetEl.closest('.sidebar__button--contact-me') || targetEl.classList.contains('sidebar__button--contact-me')) return;
  if (targetEl.closest('.header-mobile-menu--contact-me') || targetEl.classList.contains('header-mobile-menu--contact-me')) return; 
  if (targetEl.closest('.contact-mobal__body') || targetEl.classList.contains('contact-mobal__body')) return; 

  //storis video
  if (targetEl.closest('.storis__video-content') || targetEl.classList.contains('storis__video-content')) return; 
  if (targetEl.closest('.storis__items') || targetEl.classList.contains('storis__items')) return; 

 
  //header mobile menu 
  menuEl.classList.remove('active');

  //contact modal 
  contactMobal.classList.remove('open');

  //storis video
  showStoris.classList.remove('show');
  
})


















///burgerEl.addEventListener('click', () => {
  //menuEl.classList.toggle('active');
  //burgerEl.classList.toggle('active');
//})

//document.querySelectorAll('.header-mobile-menu').addEventListener('click', () => {
  //menuEl.classList.remove('active');
  //burgerEl.classList.remove('active');
//})