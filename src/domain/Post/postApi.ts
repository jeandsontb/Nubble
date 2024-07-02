import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  let response = await fetch('http://127.0.0.1:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer MQ.6-3URaBYYTn1GRdDhqgfZBxBOXiZ1zobmuordV3J9mhFKVL0thKtNTrfbOrT',
    },
  });

  let data = await response.json();
  console.log('FETCH DATA:', data);

  return postListMock;
}

export const postApi = {
  getList,
};
