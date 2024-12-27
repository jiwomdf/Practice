import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Link} from '../../components/atom';
import Button from '../../components/atom/button';
import InputDefault from '../../components/atom/input';
import InputEmail from '../../components/atom/input/EmailInput';
import {RootStackParamList} from '../../RootStack';
import {colors, fonts} from '../../utils';

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
  return (
    <View style={styles.page}>
      {/* <IlLogo /> */}
      <Text style={styles.title}>Login </Text>
      <InputEmail label="Email Address" />
      <Gap height={24} />
      <InputDefault label="Password" secureTextEntry />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} onPress={() => {}} />
      <Gap height={40} />
      <Button title="Login" onPress={() => {}} />
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
