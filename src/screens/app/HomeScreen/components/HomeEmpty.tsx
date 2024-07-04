import React from 'react';
import {ActivityIndicator} from 'react-native';

import {BoxDinamic, ButtonDinamic, TextDinamic} from '@components';

interface HomeEmptyProps {
  loading: boolean;
  error: unknown;
  refetch(): void;
}

export function HomeEmpty({loading, error, refetch}: HomeEmptyProps) {
  let component = (
    <TextDinamic preset="paragraphMedium" bold>
      Não há publicaçẽs no seu feed
    </TextDinamic>
  );

  if (loading) {
    component = <ActivityIndicator />;
  }

  if (error) {
    component = (
      <>
        <TextDinamic preset="paragraphMedium" bold mb="s16">
          Não foi possível carregar o feed!
        </TextDinamic>
        <ButtonDinamic title="Recarregar" preset="outline" onPress={refetch} />
      </>
    );
  }

  return (
    <BoxDinamic flex={1} justifyContent="center" alignItems="center">
      {component}
    </BoxDinamic>
  );
}
