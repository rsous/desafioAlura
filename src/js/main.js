const button = document.querySelector('#button');
const select = document.querySelector('#dropdown');
const options = document.querySelectorAll('.project__radio-option');
const selectLabel = document.querySelector('#select-label');

button.addEventListener('click', function (e) {
  e.preventDefault();
  toggleHidden();

  console.log('button clicked');
});

function toggleHidden() {
  select.classList.toggle('hidden');
}

options.forEach(function (option) {
  option.addEventListener('click', function (e) {
    setSelectTitle(e);
  });
});

function setSelectTitle(e) {
  const labelElement = document.querySelector(
    `label[for="${e.target.id}"]`
  ).textContent;
  selectLabel.innerHTML = labelElement;
  toggleHidden();
}

/* Handling the menu on small devices */
const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger-icon');

function toggleMenu() {
  menu.classList.toggle('show-menu-mobile');
}

function iconColor(icon) {
  icon.classList.toggle('bg-pressed');
}

burger.addEventListener('click', function () {
  toggleMenu();
  iconColor(burger);
});

/* Handling search bar */
const searchBar = document.querySelector('.header__form-small');
const searchIcon = document.querySelector('.header__search-icon');

function toggleSearch() {
  searchBar.classList.toggle('show-search-bar');
}

searchIcon.addEventListener('click', function () {
  toggleSearch();
  iconColor(searchIcon);
});
