import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { color } from '../../../utils/theme/colors';

const button: ViewStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    padding: 16,
    minHeight: 56,
};

const text: TextStyle = {
    color: '#fff',
    fontWeight: '700',
    lineHeight: 20,
};

const primary = StyleSheet.create({
    button: {
        ...button,
        backgroundColor: color.black,
    },
    disabled: {
        ...button,
        backgroundColor: color.gray,
    },
    text
});

export default { primary };
