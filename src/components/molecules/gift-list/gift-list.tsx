import React from 'react';
import {FlatList, Image} from 'react-native';
import Icon from '../../atoms/icon/icon';
import {
  EmptyStateContainer,
  EmptyText,
  Separator,
  ItemContainer,
  IconContainer,
} from './gift-list.styles';
import DeleteIcon from '../../../assets/delete-icon.png';
import WarningIcon from '../../../assets/warning-icon.png';

interface GiftProps {
  author_id: number;
  id: number;
  url: string;
}

interface GiftsListProps {
  list: GiftProps[];
  onPressDeleteGif: ({author_id, id, url}: GiftProps) => void;
}

const GiftsList = ({list, onPressDeleteGif}: GiftsListProps) => {
  const renderSeparator = () => <Separator />;

  const renderEmptyState = () => (
    <EmptyStateContainer>
      <Icon image={WarningIcon} description={''} iconStyle={{marginLeft: 40}} />
      <EmptyText>No Posee gift</EmptyText>
    </EmptyStateContainer>
  );

  return (
    <FlatList
      data={list}
      ItemSeparatorComponent={renderSeparator}
      ListEmptyComponent={renderEmptyState}
      keyExtractor={({id}) => id.toString()}
      renderItem={({item}) => {
        return (
          <ItemContainer>
            <IconContainer onPress={() => onPressDeleteGif(item)}>
              <Icon image={DeleteIcon} description={''} />
            </IconContainer>
            <Image
              style={{height: 300, width: '100%', position: 'absolute'}}
              source={{uri: item.url}}
            />
          </ItemContainer>
        );
      }}
    />
  );
};

export {GiftsList};
