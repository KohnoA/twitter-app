import { getUserAvatarMock, getUserByIdMock, testUser } from '@/__mocks__';
import { render, screen, waitFor } from '@/utils/testHelpers';

import { Profile } from './index';

describe('Testing Profile component', () => {
  beforeEach(() => {
    getUserByIdMock.mockResolvedValue(testUser);

    getUserAvatarMock.mockResolvedValue(null);
  });

  afterAll(() => jest.clearAllMocks());

  it('Should be rendered', async () => {
    render(<Profile userId="1" tweetsCount={0} isOwner={false} />);

    await waitFor(() => {
      expect(getUserByIdMock).toHaveBeenCalled();
      expect(getUserAvatarMock).toHaveBeenCalled();
      expect(screen.getByTestId('profile')).toBeInTheDocument();
    });
  });

  it('The profile edit button should be displayed if this is the profile owner', async () => {
    render(<Profile userId="1" tweetsCount={0} isOwner />);

    await waitFor(() => {
      const editButton = screen.getByTestId('edit-profile-button');
      expect(editButton).toBeInTheDocument();
    });
  });

  it('The button should not be displayed if it is not the profile owner', async () => {
    render(<Profile userId="1" tweetsCount={0} isOwner={false} />);

    await waitFor(() => {
      const editButton = screen.queryByTestId('edit-profile-button');
      expect(editButton).not.toBeInTheDocument();
    });
  });
});
