import {AuthCredentials} from '../../../authTypes';

export const mockedAuthCredentials: AuthCredentials = {
  token: 'access-token',
  tokenExpiresAt: '2024-08-10T12:08:08.433+00:00',
  refreshToken: 'refresh-token',
  user: {
    id: 1,
    firstName: 'Maria',
    lastName: 'Julia',
    userName: 'mariajulia',
    email: 'mariajulia@coffstack.com',
    profileUrl:
      'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png',
    isOnline: false,
    fullName: 'Maria Julia',
  },
};
