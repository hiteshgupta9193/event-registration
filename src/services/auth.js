import { validateAuth as validateAuthService } from 'utils/auth';

export const validateAuth = (username, password) =>
  validateAuthService(username, password);
