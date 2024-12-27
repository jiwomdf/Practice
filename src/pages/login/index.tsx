import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Link} from '../../components/atom';
import Button from '../../components/atom/button';
import InputDefault from '../../components/atom/input';
import InputEmail from '../../components/atom/input/EmailInput';
import {RootStackParamList} from '../../RootStack';
import {colors, fonts} from '../../utils';
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

  const handleLogin = (email: string, password: string) => {
    setLogin(email, password);
    navigation.navigate('MainStack');
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setIsFormValid(email !== '' && password.length > 0);
  };

  const handlPasswordChange = (text: string) => {
    setPassword(text);
    setIsFormValid(email !== '' && password.length > 0);
  };

  return (
    <View style={styles.page}>
      {/* <IlLogo /> */}
      <Text style={styles.title}>Login </Text>
      <InputEmail label="Email Address" onChangeText={handleEmailChange} />
      <Gap height={24} />
      <InputDefault
        label="Password"
        secureTextEntry
        onChangeText={handlPasswordChange}
      />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} onPress={() => {}} />
      <Gap height={40} />
      <Button
        title="Login"
        onPress={() => {
          handleLogin(email, password);
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
    maxWidth: 200,
    textAlign: 'center',
  },
});
