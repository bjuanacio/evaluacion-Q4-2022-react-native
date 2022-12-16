import { createContext, useContext, useState } from "react";

type GiftContextProps = {
  gifts: any[];
  setGifts: any;
};

const giftContextProps: GiftContextProps = {
  gifts: [],
  setGifts: () => { },
};

const GiftContext = createContext(giftContextProps);

const useGiftProvider = () => {
  const [gift, setGift] = useState([]);
  return {
    gift,
    setGift,
  };
};

const GiftProvider = ({ children }: any) => {
  const giftProviderValue = useGiftProvider();
  return (
    <GiftContext.Provider value={giftProviderValue}>
      {children}
    </GiftContext.Provider>
  );
};

const useGiftContext = () => useContext(GiftContext);

export { GiftProvider, useGiftContext };