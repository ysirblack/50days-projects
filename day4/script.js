const searchButton = document.querySelector('.btn');
const searchInput = document.querySelector('.search__input');

searchButton.addEventListener('click', () => {
    searchInput.classList.toggle('search__input--active');
    searchInput.focus();
});