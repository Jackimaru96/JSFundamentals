'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

/**
 * Event handling with mouse click
 */
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('button clicked');
    // hidden is a class, . is for a select
    openModal();
  });
}

btnCloseModal.addEventListener('click', function () {
  closeModal();
});

overlay.addEventListener('click', function () {
  closeModal();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});

function closeModal() {
  // Adding class to DOM
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function openModal() {
  // Removing class to DOM
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
