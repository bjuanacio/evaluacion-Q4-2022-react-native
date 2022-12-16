import React from 'react';
import {TextInput} from 'react-native';

interface InputProps {
  testID: string;
  value: string;
  placeholder: string;
  onChangeText: (value: string) => void;
  styles?: object;
}
export function Input({testID, value, placeholder, onChangeText}: InputProps) {
  return (
    <TextInput
      testID={testID}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
}
