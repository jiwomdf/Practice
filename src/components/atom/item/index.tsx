import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TodoModel} from '../../../core/data/model/todo-model';

type ItemProps = {todo: TodoModel; onClick: (item: TodoModel) => void};

const Item = ({todo, onClick}: ItemProps) => (
  <TouchableOpacity
    onPress={() => {
      onClick(todo);
    }}>
    <View style={styles.item}>
      <Text style={styles.title}>{todo.title}</Text>
    </View>
  </TouchableOpacity>
);

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

export default Item;
