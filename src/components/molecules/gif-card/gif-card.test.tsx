import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { GifsList } from './git-card';

test('MyFlatList renders correctly', () => {
    const items = [
        { id: 1, url: 'example.com', author_id: 27 },
        { id: 2, url: 'example.com', author_id: 27 },
        { id: 3, url: 'example.com', author_id: 27 },
    ];

    const onPressItem = jest.fn();

    const { getByTestId } = render(
        <GifsList items={items} onPressItem={onPressItem} />,
    );

    fireEvent.scroll(getByTestId("gifsList"));
    expect(onPressItem).toHaveBeenCalledWith(1);
});