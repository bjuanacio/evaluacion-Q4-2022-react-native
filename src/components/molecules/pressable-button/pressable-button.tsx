import React from 'react';
import { GestureResponderEvent, Pressable, Text } from 'react-native';
import { pressableButtonStyles } from './pressable-button.styles';

interface ButtonType {
    handleClick(event: GestureResponderEvent): void;
    text: string;
}

export const PressableButton = ({ handleClick, text }: ButtonType) => {
    return (
        <Pressable
            style={pressableButtonStyles.button}
            onPress={handleClick}>
            <Text>{text}</Text>
        </Pressable>)
}
