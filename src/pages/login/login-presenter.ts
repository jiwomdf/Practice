import {KeychainService} from '../../core/data/local/keychainservice';
import {AuthRepositoryImpl} from '../../core/data/repository/auth-repository-impl';

export const setLogin = (email: string, password: string) => {
  let keychain = new KeychainService();
  let authService = new AuthRepositoryImpl(keychain);
  return authService.login(email, password);
};

export const getLogin = () => {
  let keychain = new KeychainService();
  let authService = new AuthRepositoryImpl(keychain);
  return authService.getCredentials();
};
