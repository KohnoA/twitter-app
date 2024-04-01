import { getAllUserMock, testUser } from '@/__mocks__';
import { render, screen, waitFor } from '@/utils/testHelpers';

import { Recommendations } from './index';

describe('Testing Recommendations component', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('Should be rendered', async () => {
    render(<Recommendations />);

    expect(getAllUserMock).toHaveBeenCalled();
    expect(screen.getByTestId('recommendations')).toBeInTheDocument();
  });

  it('A message should be displayed if there are no users', async () => {
    getAllUserMock.mockResolvedValueOnce([]);

    render(<Recommendations />);

    await waitFor(() => {
      expect(screen.getByText('No users yet')).toBeInTheDocument();
    });
  });

  it('If there are less than three users, the button should not be displayed', () => {
    getAllUserMock.mockResolvedValue([testUser]);

    render(<Recommendations />);

    expect(screen.queryByTestId('show-more-button')).not.toBeInTheDocument();
  });
});
