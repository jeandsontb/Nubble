import {Alert, AlertButton} from 'react-native';

import {authCredentialsStorage} from '@services';
import {server, mockedPostComment, resetInMemoryResponse} from '@test';

import {
  fireEvent,
  renderScreen,
  screen,
  waitForElementToBeRemoved,
} from '../../../../../test/test.utils';
import {PostCommentScreen} from '../../PostCommentScreen';

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
  resetInMemoryResponse();
});

afterAll(() => {
  server.close();
  jest.resetAllMocks();
});

describe('integration: PostCommentScreen', () => {
  test('When ADDING a comment the list is automatically updated', async () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1,
          },
        }}
      />,
    );

    const comment = await screen.findByText(/Novo comentário/i);

    expect(comment).toBeTruthy();

    // achar o campo de input
    const inputText = screen.getByPlaceholderText(/Adicione um comentário/i);

    // digitar a mensagem
    fireEvent.changeText(inputText, 'novo');

    // clicar em enviar
    fireEvent.press(screen.getByText(/enviar/i));

    //espera: a lista atualizada com o novo comentário
    const newComment = await screen.findByText(/novo/i);
    expect(newComment).toBeTruthy();

    const comments = await screen.findAllByTestId('post-comment-id');

    expect(comments.length).toBe(2);
  });

  test('When DELETING a comment, the list is automatically updated and a toast message is displayed', async () => {
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mockedPostComment.topadoAuthCredentials);

    let mockedConfirm: AlertButton['onPress'];
    const mockedAlert = jest
      .spyOn(Alert, 'alert')
      .mockImplementation((title, message, buttons) => {
        if (buttons && buttons[0]) {
          mockedConfirm = buttons[0].onPress;
        }
      });

    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1,
          },
        }}
      />,
    );

    //esperar a lista carregar
    //identificar o comentário que será deletado
    const comment = await screen.findByText(
      mockedPostComment.topadoPostCommentAPI.message,
      {exact: false},
    );

    expect(comment).toBeTruthy();

    //long press no comentário
    fireEvent(comment, 'longPress');
    expect(mockedAlert).toHaveBeenCalled();

    //pressionar em confirmar
    mockedConfirm && mockedConfirm();

    // verificar se a lista foi atualizada (meu comentário)
    await waitForElementToBeRemoved(() =>
      screen.getByText(mockedPostComment.topadoPostCommentAPI.message, {
        exact: false,
      }),
    );

    const comments = await screen.findAllByTestId('post-comment-id');

    expect(comments.length).toBe(1);
  });
});
