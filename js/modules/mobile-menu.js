const menuButton = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');

const toggleMenu = () => {
  menu.classList.toggle('active');
  menuButton.classList.toggle('active');
}

const addMenuEvent = () => {
  menuButton.addEventListener('click', toggleMenu);
}

export { addMenuEvent };