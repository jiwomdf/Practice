import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../RootStack';
import Input from '../../components/atom/input/DefaultInput';

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
      <Text style={styles.title}>{todo?.title}</Text>;
      <View style={styles.item}>
        <Input label="input todo" value={todo?.content} />
      </View>
      <Button title="Save" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});
