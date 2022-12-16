import React from 'react';
import { GiftProvider } from '../../../context/gift-context/gift-context';
import { GiftList } from './gift-list/gift-list';
import WarningIcon from '../../../assets/warning-icon.png';
// import Icon from '../../atoms/icon/icon';

export const Main = () => {
  return (
    <GiftProvider>
      <GiftList />
    </GiftProvider>
  );
};
