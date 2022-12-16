import axios from 'axios';
import { gifsList, createGif, deleteGif } from './gifs-services';
import * as apiMock from './api-mocks';
import { API_URL, AUTHOR_ID } from '../utils/constants/urls';

jest.mock('axios');
jest.mock('./api-mocks');

test('gifsList should fetch data from the API', async () => {
  const data = [{}];
  apiMock.gifsList.mockResolvedValue(data);
  const result = await gifsList();
  expect(result).toEqual(data);
});

test('createGif should make a POST request to the API', async () => {
  const data = {
    url: "example.com",
    author_id: 27
  }
  apiMock.createGif.mockResolvedValue(data);

  const result = await createGif(data);

  expect(result).toEqual(data);

  expect(axios.post).toHaveBeenCalledWith(`${API_URL}?id_author=${AUTHOR_ID}`, data);
});

test('deleteGif should make a DELETE request to the API', async () => {
  const id = '47';
  apiMock.deleteGif.mockResolvedValue(true);

  const result = await deleteGif(id);

  expect(result).toEqual(true);
  expect(axios.delete).toHaveBeenCalledWith(`${API_URL}${id}`);
});
