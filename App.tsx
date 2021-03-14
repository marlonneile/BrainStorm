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
  Appearance,
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
      <StatusBar
        barStyle={scheme === 'dark' ? "light-content" : "dark-content"}
        backgroundColor={colors.background}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: colors.background },
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp',
              }),
            },
          }),
        }}
      >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Note" component={AddNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
