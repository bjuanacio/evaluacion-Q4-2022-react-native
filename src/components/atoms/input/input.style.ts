import { StyleSheet } from 'react-native';
import { color } from '../../../utils/theme/colors';

export default StyleSheet.create({
    input: {
        fontWeight: '500',
        height: 56,
        backgroundColor: color.white,
        borderRadius: 12,
        padding: 16,
        marginBottom: 10,
    },
    onFocus: {
        borderColor: '#2C2C30',
        borderWidth: 2,
    },
    onBlur: {
        borderColor: '#6E6E73',
        borderWidth: 1,
    },
});
