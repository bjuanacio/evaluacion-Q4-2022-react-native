import React from 'react';
import { FlatList } from 'react-native';

interface ListType {
    items: any[];
    renderItem: any;
}

export const List = ({ items, renderItem }: ListType) => (
    <FlatList data={items} renderItem={renderItem} />
)

