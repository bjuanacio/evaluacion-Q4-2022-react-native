import React, { useState } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { gifsList } from '../../../services/gifs-services';
import Icon from '../../atoms/icon/icon';

type Item = {
    id: number,
    url: string,
    author_id: number,
    onPressItem: (id: number) => void,
};

type Props = {
    items: Item[],
    onPressItem: (id: number) => void,
};

const ListItem: React.FC<Item> = (item, onPress) => {
    console.log('ListItem', item);

    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={{ uri: item.url }} />
            <Icon image={0} description={''} />
        </TouchableOpacity>
    )
}


export const GifsList: React.FC<Props> = ({ items, onPressItem }) => {
    console.log('GifsList', items);
    return (
        <FlatList
            testID="gifsList"
            data={items}
            renderItem={({ item }: { item: Item }) => (
                <ListItem item={item} onPress={onPressItem(item.id)} />
            )}
            keyExtractor={(item: Item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            pagingEnabled
            contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        />
    );
};