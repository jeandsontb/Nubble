import {PageAPI, api} from '@api';

import {PageParams, PostApi} from './postTypes';

async function getList(params?: PageParams): Promise<PageAPI<PostApi>> {
  const {data} = await api.get<PageAPI<PostApi>>('/user/post', {
    params,
  });

  return data;
}

export const postApi = {
  getList,
};
