import React, { FC } from 'react';
import {
  DocumentationContainer,
  DocumentationTitle,
  AddGifContainer,
} from './main.styles';
import { Input } from '../../atoms/input/input'
import { GifAddButton } from '../../atoms/button/button';
import { useGifList } from '../../../hooks/use-gif-list'
import { GifsList } from '../../molecules/gif-card/git-card';

const Main: FC = () => {
  const [gifList, setGifList] = React.useState([]);

  const { gifs, getGifList } = useGifList()

  React.useEffect(() => {

    getGifList()

  }, [])

  React.useEffect(() => {
    setGifList(gifs);
  }, [gifs]);

  return (
    <DocumentationContainer>
      <DocumentationTitle headerTitle>
        Gif Galery
      </DocumentationTitle>
      <AddGifContainer>
        <Input />
        <GifAddButton />
      </AddGifContainer>
      {gifList && <GifsList items={gifList} onPressItem={function (id: number): void {
        throw new Error('Function not implemented.');
      }} />}
    </DocumentationContainer>
  );
};

export default Main;
