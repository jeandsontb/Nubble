import {PageAPI, PageParams, api} from '@api';

import {PostApi} from './postTypes';

async function getList(params?: PageParams): Promise<PageAPI<PostApi>> {
  const {data} = await api.get<PageAPI<PostApi>>('/user/post', {
    params,
  });

  return data;
}

export const postApi = {
  getList,
};
