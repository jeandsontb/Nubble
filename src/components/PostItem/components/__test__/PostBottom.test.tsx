import {fireEvent, render, screen} from '../../../../test/test.utils';
import {PostBotton} from '../PostBottom';

import {mockedPost} from './mockedData/mockedPost';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('<PostBottom />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('it does not show the comment link if it has not comment', () => {
    render(<PostBotton {...mockedPost} commentCount={0} />);

    const commentLinkElement = screen.queryByText(/comentário/);
    expect(commentLinkElement).toBeFalsy();
  });

  it('navigates to PostCommentScreen when pressing the comment link', () => {
    render(<PostBotton {...mockedPost} commentCount={4} />);

    const commentLinkElement = screen.getByText(/comentário/);

    fireEvent.press(commentLinkElement);

    //expect call navigate function with param
    expect(mockedNavigate).toHaveBeenCalledWith('PostCommentScreen', {
      postId: mockedPost.id,
      postAuthorId: mockedPost.author.id,
    });
  });
});
