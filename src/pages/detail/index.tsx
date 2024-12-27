import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../../RootStack';
import {Input} from '../../components/atom';

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Detail'
>;
type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;

interface DetailProp {
  navigation: RegisterScreenNavigationProp;
  route: DetailRouteProp;
}

export const Detail: React.FC<DetailProp> = ({navigation, route}) => {
  const {todo} = route.params;

  return (
    <View>
      <Text>{todo?.title}</Text>;
      <Input label="input todo" value={todo?.content} />
      <Button title="Save" onPress={() => {}} />
    </View>
  );
};
