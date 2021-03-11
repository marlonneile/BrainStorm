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
  StatusBar,
} from 'react-native';
import AddNoteScreen from './src/screens/AddNoteScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <AddNoteScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
