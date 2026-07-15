import Swup from 'https://unpkg.com/swup@4?module';

const swup = new Swup({
  containers: ["#swup"]
});

document.addEventListener('click', function (event) {
  const thumb = event.target.closest('.project-thumb');
  if (!thumb) return;

  const modalImg = document.getElementById('image-modal-img');
  const modalTitle = document.getElementById('image-modal-title');

  modalImg.src = thumb.dataset.fullSrc;
  modalTitle.textContent = thumb.dataset.name;
});