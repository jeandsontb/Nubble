import React, {ReactNode} from 'react';
import {ScrollView, View} from 'react-native';

interface ScrollViewContainerDinamicProps {
  children: ReactNode;
  backgroundColor: string;
}

export const ScrollViewContainerDinamic = ({
  backgroundColor,
  children,
}: ScrollViewContainerDinamicProps) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor, flex: 1}}>
      {children}
    </ScrollView>
  );
};

export const ViewContainerDinamic = ({
  backgroundColor,
  children,
}: ScrollViewContainerDinamicProps) => {
  return <View style={{backgroundColor, flex: 1}}>{children}</View>;
};
