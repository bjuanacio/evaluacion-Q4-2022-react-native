import React from 'react';
import { GiftProvider } from '../../../context/gift-context/gift-context';
import { GiftList } from './gift-list/gift-list';

export const Main = () => {
  return (
    <GiftProvider>
      <GiftList />
    </GiftProvider>
  );
};
