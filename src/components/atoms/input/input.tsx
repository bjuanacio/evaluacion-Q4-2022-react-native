import React from 'react';
import { StyleProp, TextInputProps } from 'react-native';
import { TextInput, TextStyle } from 'react-native';
import styles from './input.style';

interface InputProps extends TextInputProps {
    customPlh: string
}

export const Input = (props: InputProps) => {
    const { customPlh, style } = props;

    const [inputStyle, setInputStyle] = React.useState<StyleProp<TextStyle>>([
        styles.input,
        styles.onBlur,
        style,
    ]);

    return (
        <TextInput
            {...props}
            style={inputStyle}
            onFocus={() => setInputStyle([styles.input, styles.onFocus, style])}
            onBlur={() => setInputStyle([styles.input, styles.onBlur, style])}
            placeholder={customPlh}
        />
    );
};
