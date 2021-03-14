import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

const StyledTextInput: React.FC<TextInputProps> = ({ style, ...rest}) => {
  const { colors } = useTheme()
  return (
    <TextInput
      {...rest}
      placeholderTextColor={colors.text}
      style={[style, { color: colors.text }]}
    />
  )
}

export default StyledTextInput;