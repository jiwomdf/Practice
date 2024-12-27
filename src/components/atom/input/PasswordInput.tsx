import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

interface PasswordInputProps {
  label: string;
  value?: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
}) => {
  const [border, setBorder] = useState(colors.border);
  const [errMsg, setErrMsg] = useState('');

  const validateForm = (text: string) => {
    const isInvalid = text.length <= 3;
    if (isInvalid) {
      setErrMsg('Password must be at least 4 characters');
    } else {
      setErrMsg('');
    }
    onChangeText(text);
  };

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
        onChangeText={validateForm}
        secureTextEntry={secureTextEntry}
      />
      <Text style={styles.errLabel}>{errMsg}</Text>
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

export default PasswordInput;
