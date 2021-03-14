/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { ReactNode, useEffect } from 'react';
import {
  StyleSheet,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddNoteScreen from './src/screens/AddNoteScreen';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

const App: () => ReactNode = () => {
  const scheme = useColorScheme()
  const colors = scheme === 'dark' ? DarkTheme.colors : DefaultTheme.colors

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar barStyle="default" backgroundColor={colors.background} />
      <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: colors.background } }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Note" component={AddNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
