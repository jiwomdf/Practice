import {MmvkService} from '../local/mmkv';
import {CredetialModel} from '../model/credential-model';

export class AuthRepositoryImpl {
  constructor(private mmvk: MmvkService) {}

  async login(credential: CredetialModel): Promise<boolean> {
    try {
      const result = await this.mmvk.saveCredentials(credential);
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
