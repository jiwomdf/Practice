import {UserCredentials} from 'react-native-keychain';
import {MMKV} from 'react-native-mmkv';
import {CredetialModel} from '../model/credential-model';

export class MmvkService {
  storage = new MMKV();

  saveCredentials = async (credential: CredetialModel) => {
    try {
      const jsonString = JSON.stringify(credential);
      localStorage.setItem('userCredentials', jsonString);
    } catch (error) {
      throw error;
    }
  };

  getCredentials = (): UserCredentials | null => {
    try {
      const jsonString = localStorage.getItem('userCredentials');
      if (!jsonString) {
        return null;
      }
      return JSON.parse(jsonString) as UserCredentials;
    } catch (error) {
      console.error('Error retrieving credentials:', error);
      return null;
    }
  };

  deleteCredentials = (): void => {
    try {
      localStorage.removeItem('userCredentials');
      console.log('Credentials deleted successfully!');
    } catch (error) {
      console.error('Error deleting credentials:', error);
    }
  };
}
