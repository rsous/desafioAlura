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
    const language = option.textContent.toLowerCase();

    editor.classList.remove('language-javascript', 'javascript');
    editor.classList.remove('language-html');
    editor.classList.remove('language-css');

    editor.classList.add(`language-${language}`);
  });
});
