import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

interface InputEmailProps {
  label: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
}

const InputEmail: React.FC<InputEmailProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
}) => {
  const [border, setBorder] = useState(colors.border);
  const [errMsg, setErrMsg] = useState('');

  const handleFocus = () => {
    setBorder(colors.tertiary);
  };

  const handleBlur = () => {
    setBorder(colors.border);
  };

  const validate = (text: string) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setErrMsg("input doesn't match email format");
      return false;
    } else {
      setErrMsg('');
    }
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[styles.input, {borderColor: border}]}
        value={value}
        onChangeText={text => validate(text)}
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
    fontFamily: fonts.primary[400],
  },
  errLabel: {
    fontSize: 16,
    color: colors.text.error,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
  },
});

export default InputEmail;
