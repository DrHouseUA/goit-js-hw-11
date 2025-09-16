import { getImagesByQuery } from '../src/js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from '../src/js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formRefEl = document.querySelector('.form');

formRefEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  showLoader();
  clearGallery();
  const searchQuery = event.currentTarget.elements['search-text'].value.trim();

  if (searchQuery.length === 0) {
    hideLoader();
    formRefEl.reset();
    return iziToast.error({
      title: 'Error',
      message: 'Sorry, you input empty query. Please try again!',
      position: 'topRight',
    });
  }

  getImagesByQuery(searchQuery)
    .then(images => {
      if (!images || images.length === 0) {
        throw new Error('Empty or invalid query');
      } else {
        createGallery(images);
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      hideLoader();
      formRefEl.reset();
    });
}
