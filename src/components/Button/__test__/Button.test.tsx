import {StyleSheet} from 'react-native';

import {ReactTestInstance} from 'react-test-renderer';

import {theme} from '@theme';

import {ButtonDinamic, ButtonDinamicProps} from '..';
import {fireEvent, render, screen} from '../../../test/test.utils';

function renderComponent(props?: Partial<ButtonDinamicProps>) {
  render(<ButtonDinamic title="Button title" {...props} />);

  const titleElement = screen.queryByText('Button title', {exact: false});
  const buttonElement = screen.getByTestId('button', {exact: false});
  const loadingElement = screen.queryByTestId('activity-indicator', {
    exact: false,
  });

  return {
    titleElement,
    loadingElement,
    buttonElement,
  };
}

describe('<Button />', () => {
  it('calls the onPress function when it is pressed', () => {
    const mockedOnPress = jest.fn();

    const {titleElement, loadingElement} = renderComponent({
      onPress: mockedOnPress,
    });

    fireEvent.press(titleElement as ReactTestInstance);

    expect(mockedOnPress).toHaveBeenCalled();
    expect(loadingElement).toBeFalsy();
  });

  it('does not a function when it is disabled and it pressed', () => {
    const mockedOnPress = jest.fn();

    const {titleElement} = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });

    fireEvent.press(titleElement as ReactTestInstance);

    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  it('the title be gray if button is disabled', () => {
    const {titleElement} = renderComponent({disabled: true});

    const titleStyle = StyleSheet.flatten(titleElement?.props.style);

    expect(titleStyle.color).toEqual(theme.colors.gray2);
  });

  describe('when button is loading', () => {
    it('show activity indicator', () => {
      const {loadingElement} = renderComponent({loading: true});

      expect(loadingElement).toBeTruthy();
    });

    it('hide button title', () => {
      const {titleElement} = renderComponent({loading: true});

      expect(titleElement).toBeFalsy();
    });

    it('disable function onPress button', () => {
      const mockedOnPress = jest.fn();

      const {buttonElement} = renderComponent({
        loading: true,
        onPress: mockedOnPress,
      });
      fireEvent.press(buttonElement);

      expect(mockedOnPress).not.toHaveBeenCalled();
    });
  });
});
