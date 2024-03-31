import { getUserAvatarMock, getUserByIdMock } from '@/__mocks__';
import { render, screen, waitFor } from '@/utils/testHelpers';

import { Profile } from './index';

describe('Testing Profile component', () => {
  beforeEach(() => {
    getUserByIdMock.mockResolvedValue({
      id: '1',
      name: 'TestUser',
      birthday: new Date(Date.now()).toISOString(),
      phone: '+375 (29) 123-12-12',
      email: 'test123@gmail.com',
    });

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
});
