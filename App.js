/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import AddNoteScreen from './src/screens/AddNoteScreen';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <AddNoteScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
