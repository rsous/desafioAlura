const editor = document.querySelector('.editor__code');
const btn = document.querySelector('.btn-highlight');
const btnSave = document.querySelector('.project__save');

btn.addEventListener('click', function () {
  hljs.highlightAll();
});

btnSave.addEventListener('click', function () {
  hljs.highlightAll();
});

/* LANGUAGE */
const languageOptions = document.querySelectorAll('.project__option');

languageOptions.forEach(function (option) {
  option.addEventListener('click', function () {
    editor.classList.remove('javascript');
    editor.classList.remove('html');
    editor.classList.remove('css');

    const language = option.textContent.toLowerCase();
    editor.classList.add(`${language}`);
  });
});
