import { del, get, post, } from '../../utils/classes/http-client';
import { API_URL } from '../../utils/constants/urls';
import { Gift } from '../../utils/interfaces/gift.interface';

const saveGift = (gift: Gift) => {
  return post(API_URL, gift);
};

const getGifts = (authorId: number) => {
  return get(`${API_URL}?author_id=${authorId}`);
};

const removeGift = (gift: Gift) => {
  return del(`${API_URL}`, gift);
};

export { getGifts, removeGift, saveGift }