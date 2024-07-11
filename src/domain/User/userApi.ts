import {api} from '@api';

import {UserAPI} from './userTypes';

const PATH = 'users';

async function getById(userId: string): Promise<UserAPI> {
  const {data} = await api.get<UserAPI>(`${PATH}/${userId}`);
  return data;
}

export const userApi = {
  getById,
};
