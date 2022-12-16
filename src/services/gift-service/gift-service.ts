import { del, get, post, } from '../../utils/classes/http-client';
import { API_URL, ID_AUTHOR } from '../../utils/constants/urls';

const saveGift = (gift: string) => {
  return post(API_URL, {
    gift,
    ID_AUTHOR,
  });
};

const getGifts = () => {
  return get(API_URL);
};

const removeGift = (id: number | undefined) => {
  return del(`${API_URL}/${id}`);
};

export { getGifts, removeGift, saveGift }