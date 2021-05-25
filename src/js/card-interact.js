const icons = document.querySelectorAll('.card__icon-heart');

for (let i = 1; i <= icons.length; i++) {
  let activeIcon = document.querySelector(`.heart-${i}`);

  let likesCounter = document.querySelector(`.heart-no-${i}`);

  activeIcon.addEventListener('click', function () {
    activeIcon.classList.toggle('clicked');

    if (activeIcon.classList.contains('clicked')) {
      activeIcon.style = 'color:#f65151';
      likesCounter.textContent = Number(likesCounter.textContent) + 1;
    } else {
      activeIcon.style = 'color:#fff';
      likesCounter.textContent = Number(likesCounter.textContent) - 1;
    }
  });
}
