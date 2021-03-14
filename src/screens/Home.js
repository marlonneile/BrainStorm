import React, { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { deleteAll, getAllNotes } from '../mmkvstorage/actions';

const Home = ({ navigation }) => {
  const [notes, setNotes] = useState()

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
    <View style={styles.root}>
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <TouchableNativeFeedback
            onPress={() => navigation.navigate('Note', {
              ...item
            })}
          >
            <View>
              <Text>{item.title}</Text>
              <Text>{item.text}</Text>
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