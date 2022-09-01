const burgerEl = document.querySelector('.header-menu__burger');
const menuEl = document.querySelector('.header-mobile-menu');

///burgerEl.addEventListener('click', () => {
  menuEl.classList.toggle('active');
  burgerEl.classList.toggle('active');
//})

//document.querySelectorAll('.header-mobile-menu').addEventListener('click', () => {
  //menuEl.classList.remove('active');
  //burgerEl.classList.remove('active');
//})


burgerEl.onclick = () => menuEl.classList.toggle('active');


document.addEventListener('click', (event) => {
  const targetEl = event.target; 

  if (targetEl.closest('.header-mobile-menu') || targetEl.classList.contains('header-mobile-menu')) return; 
  if (targetEl.closest('.header-menu__burger') || targetEl.classList.contains('header-menu__burger')) return;

  menuEl.classList.remove('active');
})
