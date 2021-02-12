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
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
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
            <TextInput
              style={styles.textTitle}>
              Note 1
            </TextInput>
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
  textTitle: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionInput: {
    paddingTop: 8,
    borderTopWidth: 1.5
  },
  textInput: {
    textAlignVertical: 'top',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'sans-serif',
    color: Colors.dark,
  }
});

export default App;
