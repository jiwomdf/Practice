import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

interface DefaultInputProps {
  label: string;
  value?: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const DefaultInput: React.FC<DefaultInputProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
}) => {
  const [border, setBorder] = useState(colors.border);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, []);

  const handleFocus = () => {
    setBorder(colors.tertiary);
  };

  const handleBlur = () => {
    setBorder(colors.border);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[styles.input, {borderColor: border}]}
        value={inputValue}
        onChangeText={text => {
          setInputValue(text);
          onChangeText(text);
        }}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[400], // Corrected fontFamily spelling
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 12, // Added padding for better user experience
  },
  errLabel: {
    fontSize: 16,
    color: colors.text.error,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
});

export default DefaultInput;
