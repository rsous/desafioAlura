import { saveAs } from 'file-saver';

/* Alternative Dropdown For Project Language selector */
const selectBtn = document.querySelector('#btnExt');
const select = document.querySelector('#dropdownExt');
const extOptions = document.querySelectorAll('.ext-option');
const selectLabel = document.querySelector('#select-ext');

const btnExport = document.querySelector('.btn-export');
const node = document.querySelector('.editor__code');

// Extensions dropdown
selectBtn.addEventListener('click', function (e) {
  e.preventDefault();
  toggleHidden();
});

function toggleHidden() {
  select.classList.toggle('hidden');
}

extOptions.forEach(function (option) {
  option.addEventListener('click', function (e) {
    setSelectTitle(e);
  });
});

function setSelectTitle(e) {
  const labelElement = document.querySelector(
    `label[for="${e.target.id}"]`
  ).textContent;
  selectLabel.innerHTML = labelElement;
  getTarget(e.target.id);
  toggleHidden();
}

let target;

function getTarget(arg) {
  target = arg;
  return target;
}

btnExport.addEventListener('click', function () {
  exportAsImage(target);
});

// Checking type & Exporting as images
const exportAsImage = function (type) {
  if (type == 'select-svg') {
    domtoimage.toSvg(node).then(function (dataUrl) {
      const link = document.createElement('a');
      link.download = 'my-code.svg';
      link.href = dataUrl;
      link.click();
    });
  }
  if (type == 'select-jpeg') {
    domtoimage.toJpeg(node, { quality: 0.95 }).then(function (dataUrl) {
      const link = document.createElement('a');
      link.download = 'my-code.jpeg';
      link.href = dataUrl;
      link.click();
    });
  }
  if (type == 'select-png') {
    domtoimage.toBlob(node).then(function (blob) {
      window.saveAs(blob, 'my-code.png');
    });
  }
};
