import React from 'react';

import {Post} from '@domain';

import {BoxDinamic, TextDinamic} from '@components';

type PostButtonProps = Pick<Post, 'author' | 'text' | 'commentCount'>;

const PostBotton = ({author, text, commentCount}: PostButtonProps) => {
  let commentText;

  return (
    <BoxDinamic mt="s16">
      <TextDinamic preset="paragraphMedium" bold>
        {author.userName}
      </TextDinamic>
      <TextDinamic preset="paragraphMedium" color="gray1">
        {text}
      </TextDinamic>
      {commentText && (
        <TextDinamic preset="paragraphSmall" mt="s8" bold color="primary">
          {getCommentText(commentCount)}
        </TextDinamic>
      )}
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
