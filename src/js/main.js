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
  iconColor(burger);

  if (menu.classList.contains('show-menu-mobile')) {
    menu.classList.toggle('hide-menu-mobile');
    setTimeout(hideMenu, 400);
  } else {
    toggleMenu();
  }
});

function hideMenu() {
  menu.classList.toggle('hidden');
}

/* Handling search bar */
const searchBar = document.querySelector('.header__form-small');
const searchIcon = document.querySelector('.header__search-icon');

function toggleSearch() {
  searchBar.classList.toggle('show-search-bar');
}

searchIcon.addEventListener('click', function () {
  iconColor(searchIcon);

  if (searchBar.classList.contains('show-search-bar')) {
    searchBar.classList.toggle('hide-search-bar');
    setTimeout(hideSearch, 300);
  } else {
    toggleSearch();
  }
});

function hideSearch() {
  searchBar.classList.toggle('hidden');
}
