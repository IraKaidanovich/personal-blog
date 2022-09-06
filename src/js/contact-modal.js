const contactMobalEl = document.querySelector('.contact-mobal');
const contactMobalBodyEl = document.querySelector('.contact-mobal__body');
const contactSidebarEl = document.querySelector('.sidebar__button--contact-me');
const contactHeaderMobileMenuEl = document.querySelector('.header-mobile-menu--contact-me');
const finishEl = document.querySelector('.contact-mobal__close');

contactSidebarEl.onclick = () => contactMobalEl.classList.toggle('open');
contactHeaderMobileMenuEl.onclick = () => contactMobalEl.classList.toggle('open');
finishEl.onclick = () => contactMobalEl.classList.remove('open');

document.addEventListener('click', (event) => {
  const targetEl = event.target; 

  if (targetEl.closest('.contact-mobal__close') || targetEl.classList.contains('contact-mobal__close')) return;
  if (targetEl.closest('.sidebar__button--contact-me') || targetEl.classList.contains('sidebar__button--contact-me')) return;
  if (targetEl.closest('.header-mobile-menu--contact-me') || targetEl.classList.contains('header-mobile-menu--contact-me')) return; 
  if (targetEl.closest('.contact-mobal__body') || targetEl.classList.contains('contact-mobal__body')) return; 

  contactMobalEl.classList.remove('open');

})