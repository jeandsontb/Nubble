import React from 'react';
import {Dimensions} from 'react-native';

import {ToastProps, ToastType} from '@services';

import {
  BoxDinamic,
  BoxShopfyProps,
  IconDinamic,
  IconDinamicProps,
  TextDinamic,
} from '@components';
import {$shadowProps} from '@theme';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

interface Props {
  toast: ToastProps;
}

export function ToastContent({toast}: Props) {
  const type: ToastType = toast.type || 'success';

  return (
    <BoxDinamic {...$BoxStyle} style={$shadowProps}>
      <IconDinamic {...mapTypeToIcon[type]} />
      <TextDinamic preset="paragraphMedium" bold style={{flexShrink: 1}}>
        {toast?.message}
      </TextDinamic>
    </BoxDinamic>
  );
}

const mapTypeToIcon: Record<ToastType, IconDinamicProps> = {
  success: {
    color: 'success',
    name: 'checkRound',
  },
  error: {
    color: 'error',
    name: 'errorRound',
  },
};

const $BoxStyle: BoxShopfyProps = {
  backgroundColor: 'background',
  alignItems: 'center',
  flexDirection: 'row',
  padding: 's16',
  borderRadius: 's16',
  gap: 's16',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
};
