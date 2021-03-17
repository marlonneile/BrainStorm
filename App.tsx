/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { ReactNode } from 'react';
import {
  StyleSheet,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';

import RootNavigator from './src/routes';

const NoteDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#232931',
    card: '#393e46',
    primary: '#12b584'
  }
}

const App: () => ReactNode = () => {
  const scheme = useColorScheme()
  const colors = scheme === 'dark' ? NoteDarkTheme.colors : DefaultTheme.colors

  return (
    <NavigationContainer theme={scheme === 'dark' ? NoteDarkTheme : DefaultTheme}>
      <StatusBar
        barStyle={scheme === 'dark' ? "light-content" : "dark-content"}
        backgroundColor={colors.background}
      />
      <RootNavigator colors={colors} />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
