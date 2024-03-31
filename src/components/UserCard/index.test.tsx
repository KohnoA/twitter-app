import { getUserAvatarMock, testUser } from '@/__mocks__';
import { AppRoutes } from '@/constants';
import { store } from '@/store';
import { setIsAuth } from '@/store/slices';
import { fireEvent, render, screen } from '@/utils/testHelpers';

import { UserCard } from './index';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Testing UserCard component', () => {
  beforeAll(() => {
    getUserAvatarMock.mockResolvedValue(null);

    store.dispatch(setIsAuth(testUser));
  });

  afterAll(() => jest.clearAllMocks());

  it('Should be rendered', async () => {
    render(<UserCard user={testUser} />);

    expect(screen.getByTestId('user-card')).toBeInTheDocument();
  });

  it(`Should not direct to the user's page if this card is the account owner`, () => {
    render(<UserCard user={testUser} />);

    const userCard = screen.getByTestId('user-card');

    fireEvent.click(userCard);

    expect(mockedUsedNavigate).not.toHaveBeenCalled();
  });

  it(`Should direct to the user's page if this card is not the account owner`, () => {
    render(<UserCard user={{ ...testUser, id: 'isNotOwner' }} />);

    const userCard = screen.getByTestId('user-card');

    fireEvent.click(userCard);

    expect(mockedUsedNavigate).toHaveBeenCalled();
    expect(mockedUsedNavigate).toHaveBeenCalledWith(`${AppRoutes.PROFILE}/isNotOwner`);
  });
});
