const slideList = document.querySelectorAll('.budget-slider li');
const activeClass = 'active';
let index = 0;

const nextSlideItem = () => {
  slideList[index].classList.remove(activeClass);
  index++;
  if (index >= slideList.length) index = 0;
  slideList[index].classList.add(activeClass);
};

const initSlider = () => {
  slideList[0].classList.add(activeClass);
  setInterval(() => nextSlideItem(), 3000);
};

export { initSlider };