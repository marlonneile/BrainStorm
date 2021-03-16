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
import NoteCard from '../components/NoteCard';

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
            <NoteCard
              onPress={() => navigation.navigate('Note', {
                ...item
              })}
              title={item.title}
              body={item.text}
            />
        )}
      />
      <View style={styles.button}>
        <Button
          title="NEW NOTE"
          color={colors.primary}
          onPress={() => navigation.navigate('Note', {
            id: '', title: '', text: ''
          })}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="ERASE ALL"
          color={colors.primary}
          onPress={handleDelete}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    width: 200,
    marginVertical: 5,
  },
})

export default Home;