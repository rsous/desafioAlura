/* Menu */
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

/* Search bar */
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
