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
  const inputSearchWord =
    event.currentTarget.elements['search-text'].value.trim();

  if (inputSearchWord.length === 0) {
    hideLoader();
    formRefEl.reset();
    console.log('Work in if');
    return iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }

  getImagesByQuery(inputSearchWord)
    .then(images => {
      if (!images || images.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
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
