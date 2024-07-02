import React from 'react';

import {SimpleLogo} from '@brand';

import {BoxDinamic, BoxShopfyProps, IconDinamic} from '@components';
import {useAppSafeAreaCustom} from '@hooks';

const HomeHeader = () => {
  const {top} = useAppSafeAreaCustom();

  return (
    <BoxDinamic {...$BoxDinamicTopStyle} style={{paddingTop: top}}>
      <SimpleLogo width={70} />

      <BoxDinamic flexDirection="row" gap="s24">
        <IconDinamic name="search" />
        <IconDinamic name="bell" />
        <IconDinamic name="comment" />
      </BoxDinamic>
    </BoxDinamic>
  );
};

export {HomeHeader};

const $BoxDinamicTopStyle: BoxShopfyProps = {
  flexDirection: 'row',
  paddingHorizontal: 's24',
  paddingBottom: 's24',
  justifyContent: 'space-between',
};
