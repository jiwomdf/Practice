import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type RemovableItemProps = {title: string; onClick: (item: string) => void};

export const RemovableItem: React.FC<RemovableItemProps> = ({
  title,
  onClick,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick(title);
      }}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#EB36FFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});
