import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';

import {useAppThemeCustom} from '@hooks';
import {ThemeColorTypes} from '@theme';

interface ActivityIndicatorDinamicProps
  extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColorTypes;
}

const ActivityIndicatorDinamic = ({color}: ActivityIndicatorDinamicProps) => {
  const {colors} = useAppThemeCustom();

  return <ActivityIndicator color={colors[color]} />;
};

export {ActivityIndicatorDinamic};
