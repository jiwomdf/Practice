import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Gap, Link} from '../../components/atom';
import Button from '../../components/atom/button';
import InputEmail from '../../components/atom/input/EmailInput';
import DefaultInput from '../../components/atom/input/PasswordInput';
import {CredetialModel} from '../../core/data/model/credential-model';
import {RootStackParamList} from '../../RootStack';
import {colors, fonts} from '../../utils';
import {validateEmailInput} from '../../utils/string-util/validate-email-input';
import {setLogin} from './login-presenter';

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;
type LoginRouteProp = RouteProp<RootStackParamList, 'Login'>;

interface LoginProp {
  navigation: RegisterScreenNavigationProp;
  route: LoginRouteProp;
}
export const Login: React.FC<LoginProp> = ({navigation}) => {
  const [isFormvalid, setIsFormValid] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (email: string, password: string) => {
    const result = await setLogin(new CredetialModel(email, password));
    if (result) {
      navigation.navigate('MainStack');
    } else {
      showMessage({
        message: 'Something went wrong',
        type: 'danger',
      });
    }
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    const isEmailvalid = validateEmailInput(email);
    setIsFormValid(isEmailvalid && password.length > 3);
  };

  const handlPasswordChange = (text: string) => {
    setPassword(text);
    const isEmailvalid = validateEmailInput(email);
    console.log(password.length);
    setIsFormValid(isEmailvalid && password.length > 3);
  };

  return (
    <View style={styles.page}>
      {/* <IlLogo /> */}
      <Text style={styles.title}>Login </Text>
      <InputEmail label="Email Address" onChangeText={handleEmailChange} />
      <Gap height={24} />
      <DefaultInput
        label="Password"
        secureTextEntry
        onChangeText={handlPasswordChange}
      />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} onPress={() => {}} />
      <Gap height={40} />
      <Button
        title="Login"
        onPress={async () => {
          if (isFormvalid) {
            await handleLogin(email, password);
          }
        }}
      />
      <Gap height={30} />
      <Link
        title="Create My Account"
        size={16}
        align="center"
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.secondary,
    marginVertical: 40,
    textAlign: 'center',
  },
});
