import * as Keychain from 'react-native-keychain';

export class KeychainService {
  // Save credentials
  saveCredentials = async (
    username: string,
    password: string,
  ): Promise<false | Keychain.Result> => {
    try {
      return await Keychain.setGenericPassword(username, password);
    } catch (error) {
      throw error;
    }
  };

  // Retrieve credentials
  getCredentials = async () => {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      console.log(
        `Username: ${credentials.username}, Password: ${credentials.password}`,
      );
    } else {
      console.log('No credentials stored');
    }
  };

  // Delete credentials
  deleteCredentials = async () => {
    await Keychain.resetGenericPassword();
  };
}
