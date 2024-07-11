import {ActivityIndicator} from 'react-native';

import {useUserGetById} from '@domain';

import {
  BoxDinamic,
  ProfileAvatar,
  ScreenDinamic,
  TextDinamic,
} from '@components';
import {AppScreenProps} from '@routes';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  const {isLoading, isError, user} = useUserGetById(userId);

  return (
    <ScreenDinamic canGoBack>
      {isLoading && <ActivityIndicator />}
      {isError && <TextDinamic>Erro ao carregar perfil do usuário</TextDinamic>}
      {user && (
        <BoxDinamic alignItems="center">
          <ProfileAvatar
            imageURL={user.profileUrl}
            size={64}
            borderRadius={24}
          />
          <TextDinamic preset="headingMedium" bold>
            {user.fullName}
          </TextDinamic>
          <TextDinamic>@{user.userName}</TextDinamic>
        </BoxDinamic>
      )}
    </ScreenDinamic>
  );
}
