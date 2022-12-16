import React, {FC, useEffect, useState} from 'react';
import {
  HomeContainer,
  Title,
  RowContainer,
  InputContainer,
  AddGifContainer,
} from './home.styles';
import AddIcon from '../../../assets/add-icon.png';
import Icon from '../../atoms/icon/icon';
import {ScrollView} from 'react-native';
import {useGifsList} from '../../../hooks/use-fetch-gif';
import {useGifCreate} from '../../../hooks/use-create-gif';
import {GiftsList} from '../../molecules/gift-list/gift-list';
import {Input} from '../../atoms/input/input';

const Home: FC = () => {
  const {gifs, getGifs} = useGifsList();
  const [urlNewGif, setUrlNewGif] = useState('');

  useEffect(() => {
    getGifs();
  }, []);

  const updateGif = () => {
    getGifs();
  }

  return (
    <HomeContainer>
      <Title>Gift Gallery</Title>
      <RowContainer haveBottomSpacing>
        <InputContainer>
          <Input
            testID={'input'}
            value={urlNewGif}
            placeholder={'Gif URL'}
            onChangeText={value => setUrlNewGif(value)}
            styles={{}}
          />
        </InputContainer>
        <AddGifContainer onPress={() => useGifCreate(urlNewGif, updateGif)}>
          <Icon
            image={AddIcon}
            description={''}
            iconStyle={{
              width: 36,
              height: 36,
            }}
          />
        </AddGifContainer>
      </RowContainer>

      <ScrollView>
        <GiftsList list={gifs} />
      </ScrollView>
    </HomeContainer>
  );
};

export default Home;
