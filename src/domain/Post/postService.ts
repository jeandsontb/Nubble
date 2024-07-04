import {apiAdapter} from '@api';
import {Page} from '@types';

import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(page: number): Promise<Page<Post>> {
  const responsePostListAPI = await postApi.getList({page, per_page: 10});

  return {
    data: responsePostListAPI.data.map(postAdapter.toPost),
    meta: apiAdapter.toMetaDataPage(responsePostListAPI.meta),
  };
}

export const postService = {
  getList,
};
