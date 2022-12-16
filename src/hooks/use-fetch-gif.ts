import {useState} from 'react';
import axios from 'axios';
import {BASE_URL, AUTHOR_ID} from '../utils/constants/api';

export const useGifsList = () => {
  const [gifs, setGifs] = useState([]);
  const getGifs = () => {
    const config = {
      headers: {
        author: AUTHOR_ID,
      },
    };

    axios.get(`${BASE_URL}?author_id=${AUTHOR_ID}`, config).then(response => {
      const {data} = response;
      setGifs(data);
    });
  };

  return {gifs, getGifs};
};
