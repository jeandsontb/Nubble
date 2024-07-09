import React from 'react';
import {Alert, Pressable} from 'react-native';

import {PostComment, postCommentService, usePostCommentRemove} from '@domain';

import {BoxDinamic, ProfileAvatar, TextDinamic} from '@components';

interface PostCommentItemProps {
  postComment: PostComment;
  userId: number;
  postAuthorId: number;
  onRemoveComment: () => void;
}

const PostCommentItem = ({
  postComment,
  userId,
  postAuthorId,
  onRemoveComment,
}: PostCommentItemProps) => {
  const {mutate} = usePostCommentRemove({onSuccess: onRemoveComment});

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
    <Pressable disabled={!isAllowToDelete} onLongPress={confirmRemove}>
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
