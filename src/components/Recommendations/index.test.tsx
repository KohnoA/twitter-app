import { getAllUserByIdMock, testUser } from '@/__mocks__';
import { render, screen, waitFor } from '@/utils/testHelpers';

import { Recommendations } from './index';

describe('Testing Recommendations component', () => {
  beforeEach(() => {
    getAllUserByIdMock.mockResolvedValue([testUser]);
  });

  it('Should be rendered', async () => {
    render(<Recommendations />);

    await waitFor(() => {
      expect(getAllUserByIdMock).toHaveBeenCalled();
      expect(screen.getByTestId('recommendations')).toBeInTheDocument();
    });
  });
});
