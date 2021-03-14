import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, TextProps } from 'react-native';

const StyledText: React.FC<TextProps> = ({ children, ...props}) => {
  const { colors } = useTheme()
  return (
    <Text {...props} style={{ color: colors.text }}>{children}</Text>
  )
}

export default StyledText;