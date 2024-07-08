import React from 'react';

import {Post} from '@domain';

import {BoxDinamic} from '@components';

import {PostActions} from './components/PostActions';
import {PostBotton} from './components/PostBottom';
import {PostHeader} from './components/PostHeader';
import {PostImage} from './components/PostImage';

interface PostItemProps {
  post: Post;
}

export function PostItem({post}: PostItemProps) {
  return (
    <BoxDinamic mb="s24" paddingHorizontal="s24">
      <PostHeader author={post.author} />

      <PostImage imageURL={post.imageURL} />

      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />

      <PostBotton
        author={post.author}
        text={post.text}
        commentCount={post.commentCount}
        id={post.id}
      />
    </BoxDinamic>
  );
}
