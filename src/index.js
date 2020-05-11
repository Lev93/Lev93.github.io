import './scss/index.scss';
import mainmenu from './js/mainmenu.js';
import slider from './js/slider.js';

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

mainmenu();
slider();