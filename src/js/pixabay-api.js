import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const instance = axios.create({});

export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '52280453-e49fee1d7ac9fb337b56d8047';

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return axios
    .get(BASE_URL, { params })
    .then(response => {
      if (response.data.hits.length === 0) {
        return iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else return response.data.hits;
    })
    .catch(error => {
      console.error(error);
    });
}
