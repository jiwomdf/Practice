interface AuthRepository {
  login(email: string, password: string): boolean;
  logout(): Promise<void>;
}
