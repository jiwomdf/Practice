import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

interface ButtonProps {
  title?: string;
  onPress: () => void;
  visible?: boolean;
}

const Button: React.FC<ButtonProps> = ({title, onPress, visible = true}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {opacity: visible ? 1 : 0.5}]}
      onPress={visible ? onPress : undefined}
      activeOpacity={0.7}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

// Style function with type annotations for dynamic styling
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.button.secondary.background,
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: colors.black,
  },
});

export default Button;
