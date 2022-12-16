import axios from 'axios';
import { deleteGif } from '../services/gifs-services';

export const useGifDelete = async () => {
  const gifDelete = async (id: any) => {
    await deleteGif(id)
  };
  return { gifDelete };
};