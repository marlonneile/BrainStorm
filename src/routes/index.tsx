import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home';
import AddNoteScreen from '../screens/AddNoteScreen';
import { RootStackParamList } from './types';
import { ColorValue } from 'react-native';

const RootStack = createStackNavigator<RootStackParamList>();

interface RootNavigatorProps {
  colors: { background: ColorValue },
}

const RootNavigator = ({ colors }: RootNavigatorProps) => {
  return (
    <RootStack.Navigator
      initialRouteName="Home"
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
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Note" component={AddNoteScreen} />
    </RootStack.Navigator>
  )
}

export default RootNavigator;