import {MMKVAuthService} from '../../core/data/local/mmkv-auth-service';
import {CredetialModel} from '../../core/data/model/credential-model';
import {AuthRepositoryImpl} from '../../core/data/repository/auth-repository-impl';

export const setLogin = (credential: CredetialModel) => {
  let keychain = new MMKVAuthService();
  let authService = new AuthRepositoryImpl(keychain);
  return authService.login(credential);
};

export const getLogin = () => {
  let keychain = new MMKVAuthService();
  let authService = new AuthRepositoryImpl(keychain);
  return authService.getCredentials();
};
