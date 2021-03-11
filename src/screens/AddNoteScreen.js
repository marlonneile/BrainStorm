import React from 'react';
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const AddNoteScreen = props => {

  const handleSaveNote = () => {
    Alert.alert("TODO", "Salvar nota")
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
            style={styles.textTitle}>
            Note 1
          </TextInput>
          <Icon name="save" size={30} color="black" onPress={handleSaveNote} />
        </View>
        <View
          style={styles.sectionInput}>
          <TextInput
            style={styles.textInput}
            scrollEnabled={true}
            numberOfLines={8}
            multiline={true}/>
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