import { render, screen } from '@/utils/testHelpers';

import { SearchBarByUsers } from './index';

describe('Testing SearchBarByUsers component', () => {
  it('Should be rendered', () => {
    render(<SearchBarByUsers />);

    expect(screen.getByTestId('searchbar-by-users')).toBeInTheDocument();
  });
});
