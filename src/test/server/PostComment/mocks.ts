import {PageAPI} from '@api';
import {AuthCredentials, PostCommentAPI, userAdapter, UserAPI} from '@domain';

const POST_ID = 1;

const postCommentAPI: PostCommentAPI = {
  id: 10,
  message: 'Novo comentário',
  user_id: 4,
  post_id: POST_ID,
  created_at: '2024-10-10T22:19:17.000+00:00',
  updated_at: '2024-10-10T22:19:17.000+00:00',
  user: {
    id: 4,
    first_name: 'Jeandson',
    last_name: 'Tenorio',
    username: 'jeandson',
    email: 'jeandsontb@gmail.com',
    profile_url: 'https://foto.com',
    is_online: false,
    full_name: 'Jeandson Tenorio',
  },
  meta: {},
};

const topadoUserAPI: UserAPI = {
  id: 8,
  first_name: 'Topado',
  last_name: 'Topadao',
  username: 'topado',
  email: 'topado@gmail.com',
  profile_url: 'https://foto.com',
  is_online: false,
  full_name: 'topado topadao',
};

export const topadoAuthCredentials: AuthCredentials = {
  token: 'access-token',
  tokenExpiresAt: '2024-10-10T22:19:17.000+00:00',
  refreshToken: 'refresh-token',
  user: userAdapter.toUser(topadoUserAPI),
};

const topadoPostCommentAPI: PostCommentAPI = {
  id: 110,
  message: 'receba',
  user_id: 8,
  post_id: POST_ID,
  created_at: '2024-10-10T22:19:17.000+00:00',
  updated_at: '2024-10-10T22:19:17.000+00:00',
  user: topadoUserAPI,
  meta: {},
};

const mockedPostCommentResponse: PageAPI<PostCommentAPI> = {
  meta: {
    total: 1,
    per_page: 10,
    current_page: 1,
    last_page: 1,
    first_page: 1,
    first_page_url: '/?page=1',
    last_page_url: '/?page=1',
    next_page_url: null,
    previous_page_url: null,
  },
  data: [topadoPostCommentAPI, postCommentAPI],
};

export const mockedData = {
  POST_ID,
  mockedPostCommentResponse,
  postCommentAPI,
  topadoAuthCredentials,
  topadoPostCommentAPI,
};
