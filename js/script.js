import { addMenuEvent } from './modules/mobile-menu.js';
import { addMugsIntoDom } from './modules/mugs.js';
import { initTabNav } from './modules/tab-nav.js';


addMenuEvent();
addMugsIntoDom();
initTabNav();


// Fazer fetch da api das mugs