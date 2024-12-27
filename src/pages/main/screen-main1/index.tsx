import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {RootStackParamList, Screen1NavigationProp} from '../../../RootStack';
import Item from '../../../components/atom/item';
import {RemovableItem} from '../../../components/atom/removable-item';
import {TodoModel} from '../../../core/data/model/todo-model';

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

interface ScreenMainProps {
  navigation: RegisterScreenNavigationProp;
}

const DATA: TodoModel[] = [
  new TodoModel('bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', '1 Item', false),
  new TodoModel('bd7acbea-c1b1-46c2-aed5-3ad53abb28baa', '2 Item', false),
  new TodoModel('bd7acbea-c1b1-46c2-aed5-3ad53abb28bab', '3 Item', false),
];

export const Dashboard: React.FC<ScreenMainProps> = () => {
  const navigation = useNavigation<Screen1NavigationProp>();

  const [listChoose, setListChoose] = useState([] as TodoModel[]);

  const addItem = (item: TodoModel) => {
    setListChoose(prevList => [...prevList, item]);
  };

  const removeItem = (item: TodoModel) => {
    setListChoose(prevList => prevList.filter(i => i !== item));
  };

  useEffect(() => {
    //const data = getLogin();
    //console.log(data);
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Screen Main 1</Text>
      <FlatList
        data={DATA}
        numColumns={3}
        renderItem={({item}) => (
          <Item
            todo={item}
            onClick={item => navigation.navigate('Detail', {todo: item})}
          />
        )}
        keyExtractor={item => item.id}
      />

      <FlatList
        data={listChoose}
        numColumns={3}
        renderItem={({item}) => (
          <RemovableItem
            title={item.title}
            onClick={title => removeItem(item)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
