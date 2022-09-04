//header mobile menu 
const burgerEl = document.querySelector('.header-menu__burger');
const menuEl = document.querySelector('.header-mobile-menu');

//contact modal 
const contactMobal = document.querySelector('.contact-mobal');
const contactMobalBody = document.querySelector('.contact-mobal__body');
const contactSidebar = document.querySelector('.sidebar__button--contact-me');
const contactHeaderMobileMenu = document.querySelector('.header-mobile-menu--contact-me');
const finish = document.querySelector('.contact-mobal__close');


//header mobile menu 
burgerEl.onclick = () => menuEl.classList.toggle ('active');

//contact modal 
contactSidebar.onclick = () => contactMobal.classList.toggle('open');
contactHeaderMobileMenu.onclick = () => contactMobal.classList.toggle('open');
finish.onclick = () => contactMobal.classList.remove('open');




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

 
  //header mobile menu 
  menuEl.classList.remove('active');

  //contact modal 
  contactMobal.classList.remove('open');
  
})