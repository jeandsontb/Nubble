import React from 'react';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {BoxDinamic, TextDinamic} from '@components';

type PostButtonProps = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'>;

const PostBotton = ({author, text, commentCount, id}: PostButtonProps) => {
  const navigation = useNavigation();

  function navigateToPostCommentScreen() {
    navigation.navigate('PostCommentScreen', {
      postId: id,
    });
  }

  return (
    <BoxDinamic mt="s16">
      <TextDinamic preset="paragraphMedium" bold>
        {author.userName}
      </TextDinamic>
      <TextDinamic preset="paragraphMedium" color="gray1">
        {text}
      </TextDinamic>
      <TextDinamic
        preset="paragraphSmall"
        mt="s8"
        bold
        color="primary"
        onPress={navigateToPostCommentScreen}>
        {getCommentText(commentCount)}
      </TextDinamic>
    </BoxDinamic>
  );
};

export {PostBotton};

const getCommentText = (commentCount: number): string | null => {
  if (commentCount === 0) {
    return null;
  }
  if (commentCount === 1) {
    return 'ver comentário';
  }

  return `ver ${commentCount} comentários`;
};
