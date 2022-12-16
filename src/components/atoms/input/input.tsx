import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './input.styles'

export const Input: React.FC = () => {
    const [value, setValue] = useState('');

    return (
        <TextInput
            testID="input"
            style={styles.input}
            onChangeText={(text) => setValue(text)}
            value={value}
        />
    );
};