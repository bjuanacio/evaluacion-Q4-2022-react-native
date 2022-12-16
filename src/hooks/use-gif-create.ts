import { createGif } from '../services/gifs-services';
import { AUTHOR_ID } from "../utils/constants/urls";

export const useGifCreate = () => {
  const createGifs = async (gif: { url: any; id_author?: string; }) => {
    const body = {
      url: gif.url,
      id_author: AUTHOR_ID,
    };
    await createGif(body)
  }
  return { createGifs };
};
