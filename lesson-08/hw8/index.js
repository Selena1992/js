import galleryItems from './gallery-items.js';

const ul = document.querySelector('ul.js-gallery');
const divLightbox = document.querySelector('div.lightbox');
const divContent = document.querySelector('div.lightbox__content');
const img = document.querySelector('img.lightbox__image');
const buttonClose = document.querySelector('button.lightbox__button');
let clickedImg = '';

galleryItems.forEach(obj => {
  ul.innerHTML += `<li class="gallery__item">
  <a class="gallery__link" href="${obj.original}">
    <img class="gallery__image" src="${obj.preview}" data-source="${obj.original}" alt="${obj.description}"/>
  </a>
</li>`;
});

function handleOpen(event) {
  event.preventDefault();
  const { target } = event;

  if (event.target === event.currentTarget) return;
  clickedImg = event.target;
  const bigImgSrc = target.getAttribute('src');
  divLightbox.classList.add('is-open');
  img.src = bigImgSrc;
}

function handleClose(event) {
  event.preventDefault();
  divLightbox.classList.remove('is-open');
  img.src = '';
}

ul.addEventListener('click', handleOpen);

buttonClose.addEventListener('click', handleClose);

divContent.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    handleClose(event);
  }
});

document.addEventListener('keydown', event => {
  if (divLightbox.classList.contains('is-open')) {
    if (event.keyCode === 27) {
      handleClose(event);
    } else {
      const lis = [...ul.querySelectorAll('li')];
      for (let i = 0; i < lis.length; i += 1) {
        if (event.keyCode === 37 && lis[i].contains(clickedImg) && i !== 0) {
          img.src = lis[i - 1].querySelector('a').getAttribute('href');
          // clickedImg = lis[i - 1].querySelector('img');
          break;
        }
        if (
          event.keyCode === 39 &&
          lis[i].contains(clickedImg) &&
          i !== lis.length - 1
        ) {
          img.src = lis[i + 1].querySelector('a').getAttribute('href');
          clickedImg = lis[i + 1].querySelector('img');
          break;
        }
      }
    }
  }
});
