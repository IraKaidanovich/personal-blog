const burgerEl = document.querySelector('.header-menu__burger');
const menuEl = document.querySelector('.header-mobile-menu');

burgerEl.onclick = () => menuEl.classList.toggle('active');

document.addEventListener('click', (event) => {
  const targetEl = event.target; 

  if (targetEl.closest('.header-mobile-menu') || targetEl.classList.container('.header-mobile-menu')) return; 
  if (targetEl.closest('.header-menu__burger') || targetEl.classList.container('.header-menu__burger')) return;

  menuEl.classList.remove('active');
})
