import { render, screen } from '@/utils/testHelpers';

import { NewTweet } from './index';

describe('Testing NewTweet component', () => {
  it('Should be rendered', () => {
    render(<NewTweet />);

    expect(screen.getByTestId('new-tweet-form')).toBeInTheDocument();
  });
});
