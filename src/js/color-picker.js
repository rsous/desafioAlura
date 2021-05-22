/* Color picker */
const colorPicker = document.querySelector('.project__color-picker');
const editorBackground = document.querySelector('.editor__container');

colorPicker.addEventListener(
  'input',
  function () {
    editorBackground.style = `background:${colorPicker.value}`;
  },
  false
);
