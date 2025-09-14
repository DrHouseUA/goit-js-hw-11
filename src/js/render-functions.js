// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

export const gallery = new SimpleLightbox('.js-gallery a', {
  /* options */
});

const loader = document.querySelector('.loader');
const ulEl = document.querySelector('.gallery');

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <li>
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}">
          </a>
          <ul>
            <li> <p>Likes</p> <span>${likes}</span> </li>
            <li> <p>Views</p> <span>${views}</span> </li>
            <li> <p>Comments</p> <span>${comments}</span> </li>
            <li> <p>Downloads</p> <span>${downloads}</span> </li>
          </ul>
        </li>`;
      }
    )
    .join('');
  return markup;
}

export function clearGallery() {
  ulEl.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('visually-hidden');
}

export function hideLoader() {
  loader.classList.add('visually-hidden');
}
