import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type ItemProps = {title: string; onClick: (item: string) => void};

const Item = ({title, onClick}: ItemProps) => (
  <TouchableOpacity
    onPress={() => {
      onClick(title);
    }}>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
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
