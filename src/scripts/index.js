const viewer = document.querySelector('div#viewer');
const imgViewer = document.querySelector('div#viewer div.img-container > img');
const searchButtons = document.querySelectorAll('div.img-container div.mask button.search-button');
const closeButton = document.querySelector('div#viewer div.img-container button.close-button');

searchButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const imgSrc = button.getAttribute('imgSrc');
    imgViewer.src = imgSrc;
    viewer.classList.add('opened');
  });
});

closeButton.addEventListener('click', () => {
  viewer.classList.remove('opened');
});

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated');
        return;
      }

      entry.target.classList.remove('animate__animated');
    });
  });

  document.querySelectorAll('.animate').forEach((element) => {
    observer.observe(element);
  });
});