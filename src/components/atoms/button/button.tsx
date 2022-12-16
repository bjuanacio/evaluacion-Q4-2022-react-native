import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { styles } from './button.styles'

export const GifAddButton: React.FC = () => {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(true);
  };

  return (
    <Button
      testID="button"
      style={styles.button}
      onPress={handlePress}
      title="Add"
    />
  );
};