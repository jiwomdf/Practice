import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import { RootStackParamList } from '../../RootStack';

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Screen2'>;
type Screen2RouteProp = RouteProp<RootStackParamList, 'Screen2'>;

interface Screen2Prop {
    navigation: RegisterScreenNavigationProp;
    route: Screen2RouteProp;
}


export const Screen2: React.FC<Screen2Prop>  = ({ navigation, route }) => {
  const { exampleParam } = route.params;

  return (
    <Text>Parameter received: {exampleParam}</Text>
  )
}
