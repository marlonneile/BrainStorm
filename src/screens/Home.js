import React, { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View
} from 'react-native';
import { useFocusEffect, useTheme } from '@react-navigation/native';

import { deleteAll, getAllNotes } from '../mmkvstorage/actions';
import StyledText from '../components/StyledText';

const Home = ({ navigation }) => {
  const [notes, setNotes] = useState()
  const { colors } = useTheme()

  useFocusEffect(
    React.useCallback(() => {
      updateLayout()
    }, [])
  )

  const updateLayout = () => {
    setNotes(getAllNotes())
  }

  const handleDelete = () => {
    deleteAll().then(() => updateLayout())
  }

  return (
    <View style={{...styles.root, backgroundColor: colors.backgroundColor }}>
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <TouchableNativeFeedback
            onPress={() => navigation.navigate('Note', {
              ...item
            })}
          >
            <View>
              <StyledText>{item.title}</StyledText>
              <StyledText>{item.text}</StyledText>
            </View>
          </TouchableNativeFeedback>
        )}
      />
      <Button title="NEW NOTE" onPress={() => navigation.navigate('Note', {
          id: '', title: '', text: ''
        })}
      />
      <Button title="ERASE" onPress={handleDelete} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Home;