import { getUserAvatarMock, setUserByIdMock, testUser } from '@/__mocks__';
import { store } from '@/store';
import { setIsAuth } from '@/store/slices';
import { act, fireEvent, render, screen } from '@/utils/testHelpers';

import { EditProfileForm } from './index';

const mockProps = {
  onCancel: jest.fn(),
  onChangePassword: jest.fn(),
};

describe('Testing EditProfileForm component', () => {
  beforeEach(() => {
    getUserAvatarMock.mockResolvedValue(null);

    render(<EditProfileForm {...mockProps} />);
  });

  it('Should be rendered', () => {
    expect(screen.getByTestId('edit-profile-form')).toBeInTheDocument();
  });

  it('The undo function must be called', () => {
    const cancelButton = screen.getByTestId('cancel-edit-profile');

    fireEvent.click(cancelButton);

    expect(mockProps.onCancel).toHaveBeenCalled();
  });

  it('Should call the password change call function', () => {
    const changePasswordButton = screen.getByTestId('change-password-button');

    fireEvent.click(changePasswordButton);

    expect(mockProps.onChangePassword).toHaveBeenCalled();
  });

  it('Should successfully trigger data update', async () => {
    const nameInput = screen.getByTestId('edit-user-name');
    const phoneInput = screen.getByTestId('edit-user-phone');
    const monthSelect = screen.getByTestId('month-select');
    const daySelect = screen.getByTestId('day-select');
    const yaerSelect = screen.getByTestId('year-select');
    const submitButton = screen.getByTestId('edit-submit-button');

    await act(async () => {
      store.dispatch(setIsAuth(testUser));

      fireEvent.change(nameInput, { target: { value: 'Newname' } });
      fireEvent.change(phoneInput, { target: { value: '+375 (44) 123-12-12' } });
      fireEvent.change(monthSelect, { target: { value: 'May' } });
      fireEvent.change(daySelect, { target: { value: '10' } });
      fireEvent.change(yaerSelect, { target: { value: '2000' } });
      fireEvent.click(submitButton);
    });

    expect(setUserByIdMock).toHaveBeenCalled();
  });
});
