import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {RootStackParamList, Screen1NavigationProp} from '../../../RootStack';
import Item from '../../../components/atom/item';
import {RemovableItem} from '../../../components/atom/removable-item';

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

interface ScreenMainProps {
  navigation: RegisterScreenNavigationProp;
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baa',
    title: 'Fourth Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f633',
    title: 'Five Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d722',
    title: 'Six Item',
  },
];

export const Dashboard: React.FC<ScreenMainProps> = () => {
  const navigation = useNavigation<Screen1NavigationProp>();

  const [listChoose, setListChoose] = useState([] as string[]);

  const addItem = (item: string) => {
    setListChoose(prevList => [...prevList, item]);
  };

  const removeItem = (item: string) => {
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
          <Item title={item.title} onClick={title => addItem(title)} />
        )}
        keyExtractor={item => item.id}
      />

      <Button
        title="Go to Screen 2"
        onPress={() => {
          navigation.navigate('Screen2', {
            exampleParam: 'test',
          });
        }}
      />

      <FlatList
        data={listChoose}
        numColumns={3}
        renderItem={({item}) => (
          <RemovableItem title={item} onClick={title => removeItem(title)} />
        )}
        keyExtractor={item => item}
      />
    </View>
  );
};
