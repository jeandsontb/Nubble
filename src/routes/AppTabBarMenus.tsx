import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {
  BoxDinamic,
  IconDinamic,
  TextDinamic,
  TouchableOpacityDinamic,
} from '@components';
import {useAppSafeAreaCustom} from '@hooks';
import {$shadowProps} from '@theme';

import {AppTabBottomTabParamListTypes} from './AppTabNavigator';
import {mapScreenToProps} from './MapScreenToPropsTabBarMenus';

export function AppTabBarMenus({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const {bottom} = useAppSafeAreaCustom();

  return (
    <BoxDinamic
      paddingTop="s12"
      flexDirection="row"
      backgroundColor="grayWhite"
      style={[{paddingBottom: bottom}, $shadowProps]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const tabNameItemMenu =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamListTypes];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityDinamic
            key={index}
            activeOpacity={1}
            alignItems="center"
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <IconDinamic
              name={
                isFocused
                  ? tabNameItemMenu.icon.focused
                  : tabNameItemMenu.icon.unfocused
              }
              color={isFocused ? 'primary' : 'backgroundContrast'}
            />
            <TextDinamic
              semiBold
              preset="paragraphCaption"
              color={isFocused ? 'primary' : 'backgroundContrast'}
              mt="s4">
              {tabNameItemMenu.label}
            </TextDinamic>
          </TouchableOpacityDinamic>
        );
      })}
    </BoxDinamic>
  );
}
