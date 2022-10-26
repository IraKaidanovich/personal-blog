const showStorisEl = document.querySelector('.storis__video');
const closeStorisEl = document.querySelector('.storis__video-content');
const storisEl = document.querySelector('.storis__items');
const controls = document.querySelectorAll('.video-controls'); 

storisEl.onclick = () => showStorisEl.classList.toggle('is-show');


document.addEventListener('click', (event) => {
  const targetEl = event.target; 
  
  if (targetEl.closest('.storis__video__item-video') || targetEl.classList.contains('storis__video__item-video')) return; 
  if (targetEl.closest('.storis__item') || targetEl.classList.contains('storis__item')) return;
  if (targetEl.closest('.video-controls') || targetEl.classList.contains('video-controls')) return; 

  showStorisEl.classList.remove('is-show');
})