import {IconDinamicProps} from '../../../components/Icon';
import {fireEvent, render, screen} from '../../../test/test.utils';
import {TextInputPasswordDinamic} from '../PasswordInput';

describe('<PasswordInput />', () => {
  it('start hidden password', () => {
    const mockedOnChange = jest.fn();

    render(
      <TextInputPasswordDinamic
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText(/password/);

    expect(inputElement.props.secureTextEntry).toBeTruthy();
  });

  test('press icon the eye, should show the password, change to the eye off icon', () => {
    const mockedOnChange = jest.fn();
    render(
      <TextInputPasswordDinamic
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );

    const eyeIcon: IconDinamicProps['name'] = 'eyeOn';
    fireEvent.press(screen.getByTestId(eyeIcon));

    const eyeOffIcon: IconDinamicProps['name'] = 'eyeOff';
    const eyeOffIconElement = screen.getByTestId(eyeOffIcon);

    expect(eyeOffIconElement).toBeTruthy();

    const inputElement = screen.getByPlaceholderText(/password/);
    expect(inputElement.props.secureTextEntry).toBeFalsy();
  });
});
