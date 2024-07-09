import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList, userUser} from '@domain';

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
  const {list, fetchNextPage, hasNextPage, refresh} =
    usePostCommentList(postId);
  const {bottom} = useAppSafeAreaCustom();
  const {id} = userUser();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem
        postComment={item}
        onRemoveComment={refresh}
        userId={id}
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

        <PostCommentTextMessage postId={postId} onAddComment={refresh} />
      </BoxDinamic>
    </ScreenDinamic>
  );
};

export {PostCommentScreen};
