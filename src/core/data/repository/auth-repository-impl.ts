import {MMKVAuthService} from '../local/mmkv-auth-service';
import {CredetialModel} from '../model/credential-model';

export class AuthRepositoryImpl {
  constructor(private mmvk: MMKVAuthService) {}

  async login(credential: CredetialModel): Promise<boolean> {
    try {
      await this.mmvk.saveCredentials(credential);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async getCredentials(): Promise<boolean> {
    try {
      await this.mmvk.getCredentials();
      return true;
    } catch (error) {
      throw error;
    }
  }

  logout(): void {
    this.mmvk.deleteCredentials();
  }
}
