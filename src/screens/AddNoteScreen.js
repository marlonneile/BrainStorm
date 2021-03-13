import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MMKVStorage from 'react-native-mmkv-storage';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MMKV = new MMKVStorage.Loader().initialize()

const generateNewId = (allNotes) => {
  const MAX_ID = 100000
  
  const newId = Math.floor(Math.random() * MAX_ID).toString()

  if (newId in allNotes) {
    return generateNewId()
  }
  return newId
}

const getNoteIds = () => {
  return MMKV.getArray("note-id")
}

const AddNoteScreen = ({ id, title, text }) => {
  const [noteID, setNoteID] = useState(id ?? '')
  const [noteTitle, setNoteTitle] = useState(title ?? '')
  const [noteBody, setNoteBody] = useState(text ?? '')
  const [allNotesId, setAllNotesId] = useState([])

  useEffect(() => {
    if (noteID === '') {
      const allNotes = getNoteIds()
      setAllNotesId(allNotes ?? [])
      setNoteID(generateNewId(allNotes ?? []))
    }
  }, [])

  const saveNoteHandler = async () => {
    MMKV.setArrayAsync("note-id", [...allNotesId, noteID])
    MMKV.setMapAsync(noteID, { title: noteTitle, text: noteBody })
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
          <TextInput
            placeholder="Title"
            value={noteTitle}
            onChangeText={(text) => setNoteTitle(text)}
            style={styles.textTitle} />
          <Icon name="save" size={30} color="black" onPress={saveNoteHandler} />
        </View>
        <View
          style={styles.sectionInput}>
          <TextInput
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
    backgroundColor: Colors.lighter,
    height: Dimensions.get("window").height
  },
  sectionContainer: {
    marginVertical: 24,
    paddingHorizontal: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionInput: {
    paddingTop: 8,
    borderTopWidth: 1.5
  },
  textTitle: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  textInput: {
    textAlignVertical: 'top',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'sans-serif',
    color: Colors.dark,
  },
})

export default AddNoteScreen;