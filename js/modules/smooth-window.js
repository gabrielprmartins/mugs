const linksMenu = document.querySelectorAll('.menu a[href^="#"]');
const linkMug = document.querySelector('[data-link]');

const getMenuHeigth = () => {
  const menu = document.querySelector('.header');
  const menuDimensions = menu.getBoundingClientRect();
  return menuDimensions.height + 20;
};

const getTopFromElement = (event) => {
  const element = event.currentTarget;
  const id = element.getAttribute('href');
  const to = document.querySelector(id).offsetTop;
  const menuHeight = getMenuHeigth();
  return to - menuHeight;
};

const scrollToPosition = (to) => {
  smoothScrollTo(0, to);
};

const scrollTo = (event) => {
  event.preventDefault();
  const topItem = getTopFromElement(event);
  scrollToPosition(topItem);
};

const addSmoothScrollEvent = () => {
  linksMenu.forEach((link) => link.addEventListener('click', scrollTo));
  linkMug.addEventListener('click', scrollTo);
};

/*
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

export { addSmoothScrollEvent };
