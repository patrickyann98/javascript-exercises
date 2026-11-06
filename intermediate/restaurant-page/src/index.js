import './styles.css';
import loadInitialPage from './initial-load.js';
import loadMenuPage from './menu.js';
import loadAboutPage from './about.js';

loadInitialPage();
const menuButton = document.querySelector('#menu-btn');
menuButton.addEventListener('click', () => {
  loadMenuPage();
});
const aboutButton = document.querySelector('#about-btn');
aboutButton.addEventListener('click', () => {
  loadAboutPage();
});
const homeButton = document.querySelector('#home-btn');
homeButton.addEventListener('click', () => {
  loadInitialPage();
});
