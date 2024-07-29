import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';

import {useAppThemeCustom} from '@hooks';
import {ThemeColorTypes} from '@theme';

interface ActivityIndicatorDinamicProps
  extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColorTypes;
}

const ActivityIndicatorDinamic = ({
  color = 'primary',
  ...rest
}: ActivityIndicatorDinamicProps) => {
  const {colors} = useAppThemeCustom();

  return (
    <ActivityIndicator
      testID="activity-indicator"
      color={colors[color]}
      {...rest}
    />
  );
};

export {ActivityIndicatorDinamic};
