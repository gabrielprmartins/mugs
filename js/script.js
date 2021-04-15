import { addMenuEvent } from './modules/mobile-menu.js';
import { addMugsIntoDom } from './modules/mugs.js';
import { initModalCart } from './modules/modal-cart.js';
import { initSlider } from './modules/slider.js';
import { addBudgetEvents } from './modules/budget.js';
import { addTooltipEvents } from './modules/tooltip.js';

addMenuEvent();
addMugsIntoDom();
initModalCart();
initSlider();
addBudgetEvents();
addTooltipEvents();
