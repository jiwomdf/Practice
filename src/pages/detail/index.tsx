import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {RootStackParamList} from '../../RootStack';
import DefaultInput from '../../components/atom/input/DefaultInput';
import {TodoModel} from '../../core/data/model/todo-model';
import {addTodo} from './detail-presenter';

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

  const [todoModel, setTodoModel] = useState<TodoModel>();

  const handleAddTodo = async (todo: TodoModel) => {
    const result = await addTodo(todo);
    if (result) {
      showMessage({
        message: 'Todo saved',
        type: 'success',
      });
    } else {
      showMessage({
        message: 'Something went wrong',
        type: 'danger',
      });
    }
  };

  return (
    <View>
      <Text style={styles.title}>{todo?.title}</Text>;
      <View style={styles.item}>
        <DefaultInput
          label="Todo"
          value={todo?.content}
          onChangeText={value => {
            setTodoModel(
              new TodoModel(
                todo?.id ?? '',
                todo?.title ?? '',
                todo?.content ?? '',
                todo?.completed ?? false,
              ),
            );
          }}
        />
      </View>
      <Button
        title="Save"
        onPress={() => {
          if (todoModel != null && todoModel != null) {
            handleAddTodo(todoModel);
          }
        }}
      />
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
