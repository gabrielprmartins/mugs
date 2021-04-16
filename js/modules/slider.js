const slideList = document.querySelectorAll('.budget-slider li');
const activeClass = 'active';
const dismissClass = 'dismiss';
let index = 0;

const nextSlideItem = () => {
  slideList[index].classList.add(dismissClass);
  // Laze transition image effect
  setTimeout(() => {
    slideList[index].classList.remove(dismissClass);
    slideList[index].classList.remove(activeClass);
    index++;
    if (index >= slideList.length) index = 0;
    slideList[index].classList.add(activeClass);
  }, 1000);
};

const initSlider = () => {
  slideList[0].classList.add(activeClass);
  setInterval(() => nextSlideItem(), 8000);
};

export { initSlider };
