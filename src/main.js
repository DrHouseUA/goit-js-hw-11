import { getImagesByQuery } from '../src/js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  gallery,
} from '../src/js/render-functions.js';

const formRefEl = document.querySelector('.form');
const ulEl = document.querySelector('.js-gallery');

formRefEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  showLoader();
  clearGallery();
  const inputSearchWord =
    event.currentTarget.elements['search-text'].value.trim();

  getImagesByQuery(inputSearchWord)
    .then(response => {
      ulEl.insertAdjacentHTML('beforeend', createGallery(response));
      gallery.refresh();
    })
    .catch(error => console.log(error))
    .finally(() => {
      hideLoader();
      formRefEl.reset();
    });
}
