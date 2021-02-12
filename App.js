/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Alert,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';

const App: () => React$Node = () => {

  handleSaveNote = () => {
    Alert.alert("TODO", "Salvar nota")
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
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
              <Icon name="save" size={30} color="black" onPress={this.handleSaveNote} />
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
      </SafeAreaView>
    </>
  );
};

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
});

export default App;
