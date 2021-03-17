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

export type { RootStackParamList, HomeScreenNavigationProp }