import { getUserAvatarMock, testTweet } from '@/__mocks__';
import { render, screen } from '@/utils/testHelpers';

import { TweetItem } from './index';

describe('Testing TweetItem component', () => {
  beforeEach(() => {
    getUserAvatarMock.mockResolvedValue(null);
  });

  it('Should be rendered', () => {
    render(<TweetItem tweet={testTweet} />);

    expect(screen.getByTestId('tweet-item')).toBeInTheDocument();
  });
});
