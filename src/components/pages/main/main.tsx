import React from 'react';
import { GiftProvider } from '../../../context/gift-context/gift-context';
import { GiftContainer } from './gift-container/gift-container';

export const Main = () => {
  return (
    <GiftProvider>
      <GiftContainer />
    </GiftProvider>
  );
};
