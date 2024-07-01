import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';
import {ThemeColorTypes} from '../../theme/theme';
import {useAppThemeCustom} from '../../hooks/useAppTheme';

interface ActivityIndicatorDinamicProps
  extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColorTypes;
}

const ActivityIndicatorDinamic = ({color}: ActivityIndicatorDinamicProps) => {
  const {colors} = useAppThemeCustom();

  return <ActivityIndicator color={colors[color]} />;
};

export {ActivityIndicatorDinamic};
