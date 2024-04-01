import { updatePasswordMock } from '@/__mocks__';
import { Errors } from '@/constants';
import { act, fireEvent, render, screen } from '@/utils/testHelpers';

import { ChangePasswordForm } from './index';

const mockProps = {
  onCancel: jest.fn(),
};

describe('Testing ChangePasswordForm component', () => {
  beforeEach(() => render(<ChangePasswordForm {...mockProps} />));

  afterAll(() => jest.clearAllMocks());

  it('Should be rendered', () => {
    expect(screen.getByTestId('change-password-form')).toBeInTheDocument();
  });

  it('An error should be displayed if the passwords do not match', async () => {
    const passwrodInput = screen.getByTestId('change-password-input');
    const confirmPasswordInput = screen.getByTestId('change-password-confirm-input');
    const submitButton = screen.getByTestId('change-password-submit');

    await act(async () => {
      fireEvent.change(passwrodInput, { target: { value: 'Qwertyu1' } });
      fireEvent.change(confirmPasswordInput, { target: { value: 'Qwertyu11' } });
      fireEvent.click(submitButton);
    });

    expect(screen.getByText(Errors.PASSWORD_CONFIRM)).toBeInTheDocument();
  });

  it('The undo function must be called', () => {
    const cancelButton = screen.getByTestId('change-password-cancel-button');

    fireEvent.click(cancelButton);

    expect(mockProps.onCancel).toHaveBeenCalled();
  });

  it('The form must be submitted', async () => {
    const passwrodInput = screen.getByTestId('change-password-input');
    const confirmPasswordInput = screen.getByTestId('change-password-confirm-input');
    const submitForm = screen.getByTestId('change-password-form');

    await act(async () => {
      fireEvent.change(passwrodInput, { target: { value: 'Qwertyu1' } });
      fireEvent.change(confirmPasswordInput, { target: { value: 'Qwertyu1' } });
      fireEvent.submit(submitForm);
    });

    expect(updatePasswordMock).toHaveBeenCalled();
  });
});
