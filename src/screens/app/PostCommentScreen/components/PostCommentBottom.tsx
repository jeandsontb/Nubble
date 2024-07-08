import React from 'react';
import {Pressable} from 'react-native';

import {TextDinamic} from '@components';

interface PostCommentBottomProps {
  fetchNextPage(): void;
  hasNextPage: boolean;
}

const PostCommentBottom = ({
  fetchNextPage,
  hasNextPage,
}: PostCommentBottomProps) => {
  if (hasNextPage) {
    return (
      <Pressable onPress={fetchNextPage}>
        <TextDinamic bold color="primary" textAlign="center">
          Ver mais
        </TextDinamic>
      </Pressable>
    );
  }

  return null;
};

export {PostCommentBottom};
