import React from 'react';

import {Post} from '@domain';

import {BoxDinamic, ProfileAvatar, TextDinamic} from '@components';

type PostHeaderProps = Pick<Post, 'author'>;

export function PostHeader({author}: PostHeaderProps) {
  return (
    <BoxDinamic flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageURL={author.profileURL} />
      <TextDinamic preset="paragraphMedium" ml="s12" semiBold>
        {author.userName}
      </TextDinamic>
    </BoxDinamic>
  );
}
