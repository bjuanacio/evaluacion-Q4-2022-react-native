import React, { PropsWithChildren } from 'react';
import { Text, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './button.styles';

interface ButtonProps extends PropsWithChildren {
    onPress?: () => void;
    disabled?: boolean;
    style?: ViewStyle;
}

export const Button = (props: ButtonProps) => {
    const {
        onPress,
        children,
        disabled,
        style,
    } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[disabled ? styles.primary.disabled : styles.primary.button, style]}
        >
            {typeof children === 'string' ? (
                <Text style={styles.primary.text}>{children}</Text>
            ) : (
                children
            )}
        </TouchableOpacity>
    );
};
