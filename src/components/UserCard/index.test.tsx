import { getUserAvatarMock, testUser } from '@/__mocks__';
import { render, screen, waitFor } from '@/utils/testHelpers';

import { UserCard } from './index';

describe('Testing UserCard component', () => {
  beforeAll(() => {
    getUserAvatarMock.mockResolvedValue(null);
  });

  it('Should be rendered', async () => {
    render(<UserCard user={testUser} />);

    await waitFor(() => {
      expect(screen.getByTestId('user-card')).toBeInTheDocument();
    });
  });
});
