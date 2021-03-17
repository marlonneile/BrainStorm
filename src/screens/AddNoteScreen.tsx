import { useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StyledTextInput from '../components/StyledTextInput';
import { getAllNotesId } from '../mmkvstorage/actions';
import MMKV from '../mmkvstorage/store';
import { AddNoteScreenNavigationProp, AddNoteScreenRouteProp } from '../routes/types';

const generateNewId = (allNotes) => {
  const MAX_ID = 100000
  
  const newId = Math.floor(Math.random() * MAX_ID).toString()

  if (allNotes.includes(newId)) {
    return generateNewId()
  }
  return newId
}

const isEmpty = (str) => {
  return (str.length === 0 || !str.trim())
}

interface AddNoteScreenProps {
  route: AddNoteScreenRouteProp
  navigation: AddNoteScreenNavigationProp
}

const AddNoteScreen = ({ route, navigation }: AddNoteScreenProps) => {
  const { id, title, text } = route.params;
  const [noteID, setNoteID] = useState(id ?? '')
  const [noteTitle, setNoteTitle] = useState(title ?? '')
  const [noteBody, setNoteBody] = useState(text ?? '')
  const [allNotesId, setAllNotesId] = useState([])
  const { colors } = useTheme()

  useEffect(() => {
    const allNotes = getAllNotesId()
    
    setAllNotesId(allNotes)
    if (noteID === '') {
      setNoteID(generateNewId(allNotes))
    }
  }, [])

  const saveNoteHandler = async () => {
    if (isEmpty(noteTitle) && isEmpty(noteBody)) {
      navigation.goBack()
      return
    }

    if (!allNotesId.includes(noteID)) {
      MMKV.setArrayAsync('note-id', [...allNotesId, noteID])
    }
    MMKV.setMapAsync(noteID, { title: noteTitle, text: noteBody })
    navigation.goBack()
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
      style={styles.root}>
      <View
        style={styles.sectionContainer}>
        <View
          style={styles.sectionHeader}>
          <StyledTextInput
            placeholder="Title"
            value={noteTitle}
            onChangeText={(text) => setNoteTitle(text)}
            style={styles.titleInput} />
          <Icon name="save" size={30} color={colors.primary} onPress={saveNoteHandler} />
        </View>
        <View
          style={[styles.sectionInput, {borderTopColor: colors.primary}]}>
          <StyledTextInput
            style={styles.textInput}
            placeholder="Write your ideas here"
            value={noteBody}
            onChangeText={(text) => setNoteBody(text)}
            scrollEnabled={true}
            numberOfLines={8}
            multiline={true}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  root: {
    height: Dimensions.get("window").height
  },
  sectionContainer: {
    marginVertical: 24,
    paddingHorizontal: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionInput: {
    paddingTop: 8,
    borderTopWidth: 1.5
  },
  titleInput: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: '600',
    flex: 1,
    marginEnd: 10,
  },
  textInput: {
    textAlignVertical: 'top',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'sans-serif',
  },
})

export default AddNoteScreen;