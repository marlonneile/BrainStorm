import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack"

type RootStackParamList = {
  Home: undefined;
  Note: {
    id: string,
    title: string,
    text: string,
  };
}

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type AddNoteScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Note'
>;

type AddNoteScreenRouteProp = RouteProp<
  RootStackParamList,
  'Note'
>;

export type {
  RootStackParamList,
  HomeScreenNavigationProp,
  AddNoteScreenNavigationProp,
  AddNoteScreenRouteProp,
}