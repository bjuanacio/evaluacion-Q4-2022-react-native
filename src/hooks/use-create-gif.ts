import axios from 'axios';
import {BASE_URL, AUTHOR_ID} from '../utils/constants/api';

export const useGifCreate = async (url: string, callback?: any) => {
  const newGif = {url, author_id: AUTHOR_ID};

  await axios
    .post(`${BASE_URL}`, newGif)
    .then(res => {
      const {data} = res;
      console.log('response', data);
      if (callback) {
        callback();
      }
    })
    .catch(error => {
      console.log('error', error);
    });
};
