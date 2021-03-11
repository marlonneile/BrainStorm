import React from 'react';
import {
  Alert,
  Button,
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

const AddNoteScreen = props => {

  const saveNoteHandler = async () => {
    await MMKV.setMapAsync("note", { title: "title", text: "text" })
  }

  const getNote = async () => {
    await MMKV.getMapAsync("note").then((value) => console.log(value))
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
      style={styles.scrollView}>
      <View
        style={styles.sectionContainer}>
        <View
          style={styles.sectionHeader}>
          <TextInput
            placeholder="Title"
            style={styles.textTitle} />
          <Icon name="save" size={30} color="black" onPress={saveNoteHandler} />
        </View>
        <View
          style={styles.sectionInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Write your ideas here"
            scrollEnabled={true}
            numberOfLines={8}
            multiline={true}/>
            <Button title="GET" onPress={getNote} />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
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