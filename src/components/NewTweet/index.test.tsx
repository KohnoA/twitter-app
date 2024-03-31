import { addTweetMock, getUserAvatarMock, testUser } from '@/__mocks__';
import { store } from '@/store';
import { setIsAuth } from '@/store/slices';
import { act, fireEvent, render, screen, waitFor } from '@/utils/testHelpers';

import { NewTweet } from './index';

describe('Testing NewTweet component', () => {
  beforeEach(() => {
    getUserAvatarMock.mockResolvedValue(null);

    render(<NewTweet />);
  });

  it('Should be rendered', () => {
    expect(screen.getByTestId('new-tweet-form')).toBeInTheDocument();
  });

  it('The container with the image should be displayed when it appears', async () => {
    const testFile = new File(['(⌐□_□)'], 'test-image.jpg', { type: 'image/jpg' });
    const fileInput = screen.getByTestId('file-input');
    URL.createObjectURL = (file) => file.toString();

    await waitFor(() => {
      fireEvent.change(fileInput, { target: { files: [testFile] } });
    });

    const imageContainer = screen.getByTestId('image-container');

    expect(imageContainer).toBeInTheDocument();
  });

  it('Must add a new tweet', async () => {
    const textaria = screen.getByTestId('new-tweet-textarea');
    const submitButton = screen.getByTestId('new-tweet-submit');

    await act(async () => {
      store.dispatch(setIsAuth(testUser));

      fireEvent.change(textaria, { target: { value: 'Test tweet' } });
      fireEvent.click(submitButton);
    });

    expect(addTweetMock).toHaveBeenCalled();
  });
});
