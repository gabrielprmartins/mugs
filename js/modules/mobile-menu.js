const menuButton = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const html = document.documentElement;

const openMenu = (event) => {
  menu.classList.add('active');
  menuButton.classList.add('active');
  setTimeout(() => html.addEventListener('click', closeMenu));
}

const closeMenu = () => { 
  menu.classList.remove('active');
  menuButton.classList.remove('active');
  setTimeout(() => html.removeEventListener('click', closeMenu));
}

const addMenuEvent = () => {
  menuButton.addEventListener('click', openMenu);
}

export { addMenuEvent };