import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../../../RootStack';

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ScreenMain2'>;

interface ScreenMain2Prop {
    navigation: RegisterScreenNavigationProp;
}

export const ScreenMain2: React.FC<ScreenMain2Prop>  = ({ navigation }) => {
  return (
    <View>
      <Text>ScreenMain2</Text>
    </View>
  );
}
