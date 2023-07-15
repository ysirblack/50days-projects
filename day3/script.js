const openButon = document.getElementById('open');
const closeButon = document.getElementById('close');
const menu = document.getElementById('menu');
const container = document.querySelector('.container');
const navbar = document.getElementById('navbar');

openButon.addEventListener('click', () => {
  menu.classList.remove('menu--back--rotate');
  menu.classList.add('menu--rotate');
  container.classList.add('container--rotate');
  navbar.classList.add('nav--show');
});

closeButon.addEventListener('click', () => {
  menu.classList.remove('menu--rotate');
  menu.classList.add('menu--back--rotate');
  container.classList.remove('container--rotate');
  navbar.classList.remove('nav--show');
});