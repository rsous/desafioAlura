/* Alternative Dropdown For Project Language selector */
const button = document.querySelector('#button');
const select = document.querySelector('#dropdown');
const options = document.querySelectorAll('.project__radio-option');
const selectLabel = document.querySelector('#select-label');

button.addEventListener('click', function (e) {
  e.preventDefault();
  toggleHidden();
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
