import {StyleSheet, TouchableOpacity} from 'react-native';
import {TodoModel} from '../../../core/data/model/todo-model';

type ItemProps = {todo: TodoModel; onClick: (item: TodoModel) => void};

const Item = ({todo, onClick}: ItemProps) => (
  <TouchableOpacity
    onPress={() => {
      onClick(todo);
    }}></TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});

export default Item;
