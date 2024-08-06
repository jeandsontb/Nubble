import {useSafeAreaInsets, EdgeInsets} from 'react-native-safe-area-context';

import {theme} from '@theme';

import {renderHook} from '../../test/test.utils';
import {useAppSafeAreaCustom} from '../useAppSafeAreaCustom';

jest.mock('react-native-safe-area-context');
const mockedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe('useAppSafeArea', () => {
  it('when the safe area is less than minimum requirement, it returns the minimum requiriment', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () => ({top: 5, bottom: 5} as EdgeInsets),
    );

    const {result} = renderHook(() => useAppSafeAreaCustom());

    expect(result.current.top).toEqual(theme.spacing.s20);
    expect(result.current.bottom).toEqual(theme.spacing.s20);
  });

  it('when the safe area is greater than minimum requirement, it returns the safe area', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () => ({top: 40, bottom: 40} as EdgeInsets),
    );

    const {result} = renderHook(() => useAppSafeAreaCustom());

    expect(result.current.top).toEqual(40);
    expect(result.current.bottom).toEqual(40);
  });
});
