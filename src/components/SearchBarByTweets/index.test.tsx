import { render, screen } from '@/utils/testHelpers';

import { SearchBarByTweets } from './index';

describe('Testing SearchBarByTweets component', () => {
  it('Should be rendered', () => {
    render(<SearchBarByTweets />);

    expect(screen.getByTestId('searchbar-by-tweets')).toBeInTheDocument();
  });
});
