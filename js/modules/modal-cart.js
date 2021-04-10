const buttonCart = document.querySelectorAll('[data-cart="open"]');
const cart = document.querySelector('[data-cart="cart"]');
const activeClass = 'active';
const dismissClass = 'dismiss';

const closeCart = (event) => {
  if (event.target === cart) {
    cart.classList.add(dismissClass);
    setTimeout(() => {
      cart.classList.remove(dismissClass);
      cart.classList.remove(activeClass);
    }, 300);
  }
};

const openCart = () => {
  cart.classList.add(activeClass);
  cart.addEventListener('click', closeCart);
};

const addCartButtonEvent = () => {
  buttonCart.forEach((button) => button.addEventListener('click', openCart));
};

const initModalCart = () => {
  if (buttonCart.length) {
    addCartButtonEvent();
  }
};

export {initModalCart };
