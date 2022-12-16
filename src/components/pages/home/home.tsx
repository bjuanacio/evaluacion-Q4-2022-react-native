import React, {FC, useEffect} from 'react';
import {HomeContainer, Title} from './home.styles';
import DeleteIcon from '../../../assets/delete-icon.png';
import Icon from '../../atoms/icon/icon';
import {ScrollView} from 'react-native';
import {useGifsList} from '../../../hooks/use-fetch-gif';
import {GiftsList} from '../../molecules/gift-list/gift-list';

const Home: FC = () => {
  const {gifs, getGifs} = useGifsList();

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <HomeContainer>
      <Title>Gift Gallery</Title>
      <ScrollView>
        <GiftsList list={gifs} />
      </ScrollView>
    </HomeContainer>
  );
};

export default Home;
