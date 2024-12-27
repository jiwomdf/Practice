import {MMKVAuthService} from '../local/mmkv-auth-service';
import {CredetialModel} from '../model/credential-model';

export class AuthRepositoryImpl {
  constructor(private mmvk: MMKVAuthService) {}

  async login(credential: CredetialModel): Promise<boolean> {
    try {
      const result = await this.mmvk.saveCredentials(credential);
      return result != null;
    } catch (error) {
      throw error;
    }
  }

  async getCredentials(): Promise<boolean> {
    try {
      const result = await this.mmvk.getCredentials();
      return result != null;
    } catch (error) {
      throw error;
    }
  }

  logout(): void {
    this.mmvk.deleteCredentials();
  }
}
