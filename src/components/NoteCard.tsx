import { useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import StyledText from './StyledText';

interface NoteCardProps {
  title: string
  body: string
  onPress: () => void
}

const NoteCard: React.FC<NoteCardProps> = ({ title, body, onPress }) => {
  const [shortBody, setShortBody] = useState('')
  useEffect(() => {
    setShortBody(body.replace(/(.{50})..+/, "$1..."))
  }, [body])

  const { colors } = useTheme()

  console.log(colors)

  return (
    <TouchableNativeFeedback
      onPress={onPress}
    >
      <View
        style={{
          ...styles.container,
          backgroundColor: colors.card,
          borderColor: colors.border
        }}
      >
        <StyledText>{title}</StyledText>
        <View style={{...styles.separator, borderTopColor: colors.primary }} />
        <StyledText>{shortBody}</StyledText>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width*0.8,
    height: 100,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
  separator: {
    borderTopWidth: 1,
    marginVertical: 5,
  },
})

export default NoteCard;