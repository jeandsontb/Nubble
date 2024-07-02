import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Post, postService} from '@domain';

import {PostItem, ScreenDinamic} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeHeader} from './components/HomeHeader';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomeScreen = ({navigation}: AppTabScreenProps<'HomeScreen'>) => {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  }, []);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <ScreenDinamic
      style={{paddingBottom: 0, paddingTop: 0, paddingHorizontal: 0}}>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HomeHeader />}
      />
    </ScreenDinamic>
  );
};

export {HomeScreen};
