import React from 'react';

import {PostComment} from '@domain';

import {BoxDinamic, ProfileAvatar, TextDinamic} from '@components';

interface PostCommentItemProps {
  postComment: PostComment;
}

const PostCommentItem = ({postComment}: PostCommentItemProps) => {
  return (
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
  );
};

export {PostCommentItem};
