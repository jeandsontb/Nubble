import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';
import {useAuthCredentialsService} from '@services';

import {BoxDinamic, ScreenDinamic} from '@components';
import {useAppSafeAreaCustom} from '@hooks';
import {AppScreenProps} from '@routes';

import {
  PostCommentBottom,
  PostCommentItem,
  PostCommentTextMessage,
} from './components';

const PostCommentScreen = ({route}: AppScreenProps<'PostCommentScreen'>) => {
  const postId = route.params.postId;
  const postAuthorId = route.params.postAuthorId;
  const {list, fetchNextPage, hasNextPage} = usePostCommentList(postId);
  const {bottom} = useAppSafeAreaCustom();

  const {userId} = useAuthCredentialsService();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem
        postComment={item}
        postId={postId}
        userId={userId}
        postAuthorId={postAuthorId}
      />
    );
  }

  return (
    <ScreenDinamic flex={1} title="Comentários" canGoBack>
      <BoxDinamic flex={1} justifyContent="space-between">
        <FlatList
          data={list}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: bottom}}
          ListFooterComponent={
            <PostCommentBottom
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
          }
        />

        <PostCommentTextMessage postId={postId} />
      </BoxDinamic>
    </ScreenDinamic>
  );
};

export {PostCommentScreen};
