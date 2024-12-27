import {KeychainService} from '../local/keychainservice';

export class AuthRepositoryImpl {
  constructor(private keychain: KeychainService) {}

  async login(email: string, password: string): Promise<boolean> {
    try {
      const result = await this.keychain.saveCredentials(email, password);
      //TODO JIWO
      console.log(result);
      return result != null;
    } catch (error) {
      //TODO JIWO
      console.log(error);
      throw error;
    }
  }

  async getCredentials(): Promise<boolean> {
    try {
      const result = await this.keychain.getCredentials();
      return result != null;
    } catch (error) {
      throw error;
    }
  }

  logout(): Promise<void> {
    return this.keychain.deleteCredentials();
  }
}
