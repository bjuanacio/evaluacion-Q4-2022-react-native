import axios from "axios";
import { API_URL, AUTHOR_ID } from "../utils/constants/urls";

export const gifsList = async () => {
    const gifs = axios.get(`${API_URL}?author_id=${AUTHOR_ID}`)
    return gifs
}
export const createGif = async (body: any) => {
    axios.post(`${API_URL}?id_author=${AUTHOR_ID}`, body);
}
export const deleteGif = async (id: any) => {
    axios.delete(`${API_URL}${id}`).then(res => console.log(res));
}