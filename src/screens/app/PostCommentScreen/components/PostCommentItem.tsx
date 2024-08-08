import React from 'react';
import {Alert, Pressable} from 'react-native';

import {PostComment, postCommentService, usePostCommentRemove} from '@domain';
import {useToastService} from '@services';

import {BoxDinamic, ProfileAvatar, TextDinamic} from '@components';

interface PostCommentItemProps {
  postId: number;
  postComment: PostComment;
  userId: number | null;
  postAuthorId: number;
}

const PostCommentItem = ({
  postId,
  postComment,
  userId,
  postAuthorId,
}: PostCommentItemProps) => {
  const {showToast} = useToastService();
  const {mutate} = usePostCommentRemove(postId, {
    onSuccess: () => {
      showToast({
        message: 'Comentário deletado',
      });
    },
  });

  const isAllowToDelete = postCommentService.isAllowToDelete(
    postComment,
    userId,
    postAuthorId,
  );

  function confirmRemove() {
    Alert.alert('Seseja confirmar a exclusão?', 'Pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => mutate({postCommentId: postComment.id}),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Pressable
      testID={'post-comment-id'}
      disabled={!isAllowToDelete}
      onLongPress={confirmRemove}>
      <BoxDinamic flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={postComment.author.profileURL} />
        <BoxDinamic ml="s12" flex={1}>
          <TextDinamic preset="paragraphSmall" bold>
            {postComment.author.userName}
          </TextDinamic>
          <TextDinamic preset="paragraphSmall" color="gray1">
            {postComment.message} - {postComment.createdAtRelative}
          </TextDinamic>
        </BoxDinamic>
      </BoxDinamic>
    </Pressable>
  );
};

export {PostCommentItem};
