import { render, screen } from '@/utils/testHelpers';

import { TweetList } from './index';

describe('Testing TweetList component', () => {
  it('Should be rendered', () => {
    render(<TweetList tweets={[]} />);

    expect(screen.getByTestId('tweet-list-section')).toBeInTheDocument();
  });
});
