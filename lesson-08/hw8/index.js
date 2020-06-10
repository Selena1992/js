import galleryItems from './gallery-items.js';

const ulGallery = document.querySelector('ul.js-gallery');
const divLightbox = document.querySelector('div.lightbox');
const divLightboxContent = document.querySelector('div.lightbox__content');
const divLightboxImg = document.querySelector('img.lightbox__image');
const buttonClose = document.querySelector('button.lightbox__button');
let currentImg;

const imgHtml = galleryItems.reduce(
  (acc, obj) =>
    acc +
    `<li class="gallery__item">
  <a class="gallery__link" href="${obj.original}">
    <img class="gallery__image" src="${obj.preview}" data-source="${obj.original}" alt="${obj.description}"/>
  </a>
</li>`,
  '',
);

ulGallery.insertAdjacentHTML('beforeend', imgHtml);

function handleOpen(event) {
  event.preventDefault();
  const { target } = event;

  if (event.target === event.currentTarget) return;
  currentImg = event.target;
  const bigImgSrc = target.getAttribute('src');
  divLightbox.classList.add('is-open');
  divLightboxImg.src = bigImgSrc;
}

function handleClose(event) {
  event.preventDefault();
  divLightbox.classList.remove('is-open');
  divLightboxImg.src = '';
}

ulGallery.addEventListener('click', handleOpen);

buttonClose.addEventListener('click', handleClose);

divLightboxContent.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    handleClose(event);
  }
});

document.addEventListener('keydown', event => {
  if (divLightbox.classList.contains('is-open')) {
    if (event.keyCode === 27) {
      handleClose(event);
    } else {
      const liNodes = [...ulGallery.querySelectorAll('li')];
      for (let i = 0; i < liNodes.length; i += 1) {
        if (
          event.keyCode === 37 &&
          liNodes[i].contains(currentImg) &&
          i !== 0
        ) {
          divLightboxImg.src = liNodes[i - 1]
            .querySelector('a')
            .getAttribute('href');
          currentImg = liNodes[i - 1].querySelector('img');
          break;
        }
        if (
          event.keyCode === 39 &&
          liNodes[i].contains(currentImg) &&
          i !== liNodes.length - 1
        ) {
          divLightboxImg.src = liNodes[i + 1]
            .querySelector('a')
            .getAttribute('href');
          currentImg = liNodes[i + 1].querySelector('img');
          break;
        }
      }
    }
  }
});
