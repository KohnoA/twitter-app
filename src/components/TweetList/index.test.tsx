import { getUserAvatarMock, testTweet } from '@/__mocks__';
import { render, screen } from '@/utils/testHelpers';

import { TweetList } from './index';

describe('Testing TweetList component', () => {
  beforeAll(() => getUserAvatarMock.mockResolvedValue(null));

  afterAll(() => jest.clearAllMocks());

  it('Should be rendered', () => {
    render(<TweetList tweets={[]} />);

    expect(screen.getByTestId('tweet-list-section')).toBeInTheDocument();
  });

  it('Should display a spinner', () => {
    render(<TweetList isLoading />);

    const loader = screen.getByTestId('tweet-list-loader');

    expect(loader).toBeInTheDocument();
  });

  it('Should display a message if there are no tweets in the list', () => {
    render(<TweetList tweets={[]} />);

    const emptyMessage = screen.getByText(/No tweets yet/);

    expect(emptyMessage).toBeInTheDocument();
  });

  it('Should display the number of tweets transferred', () => {
    render(
      <TweetList tweets={[testTweet, { ...testTweet, id: '144' }, { ...testTweet, id: '4142' }]} />,
    );

    const tweetList = screen.getByTestId('tweet-list');
    const tweetItems = screen.getAllByTestId('tweet-item');

    expect(tweetList).toBeInTheDocument();
    expect(tweetItems.length).toBe(3);
  });
});
