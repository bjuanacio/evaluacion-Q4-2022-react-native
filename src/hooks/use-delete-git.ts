import axios from 'axios';
import {BASE_URL} from '../utils/constants/api';

interface gifProps {
  id: number;
  url: string;
  author_id: number;
}

export const useGifDelete = async (
  {author_id, id, url}: gifProps,
  callback: any,
) => {
  const parameters = {
    data: {author_id, id, url},
  };
  await axios.delete(`${BASE_URL}`, parameters).then(response => {
    const {data} = response;
    console.log('data', data);
    if (callback) {
      callback();
    }
  });
};
