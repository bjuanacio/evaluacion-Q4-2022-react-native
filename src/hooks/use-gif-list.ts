import React from "react";
import { gifsList } from "../services/gifs-services";

export const useGifList = () => {
  const [gifs, setGifs] = React.useState([])
  const getGifList = async () => {
    const gifList = await gifsList()
    setGifs(gifList)
  }
  return { gifs, getGifList }
}