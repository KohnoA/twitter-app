import { signUpMock, testEmailFormData } from '@/__mocks__';
import { Errors } from '@/constants';
import { store } from '@/store';
import { setEmailFormData } from '@/store/slices';
import { act, fireEvent, render, screen } from '@/utils/testHelpers';

import { SignUpPasswordForm } from './index';

describe('Test SignUpPasswordForm component', () => {
  beforeEach(() => render(<SignUpPasswordForm />));

  afterAll(() => jest.clearAllMocks());

  it('Should be rendered', () => {
    expect(screen.getByTestId('signup-password-form')).toBeInTheDocument();
  });

  it('Passwords must match', async () => {
    const passwordInput = screen.getByTestId('signup-password-input');
    const confirmPasswordInput = screen.getByTestId('signup-confirm-password-input');
    const submitButton = screen.getByTestId('signup-submit-button');

    await act(async () => {
      fireEvent.change(passwordInput, { target: { value: 'Qwertyu1' } });
      fireEvent.change(confirmPasswordInput, { target: { value: 'Qwertyu1123' } });
      fireEvent.click(submitButton);
    });

    expect(screen.getByText(Errors.PASSWORD_CONFIRM)).toBeInTheDocument();
  });

  it('The form must be submitted', async () => {
    const passwordInput = screen.getByTestId('signup-password-input');
    const confirmPasswordInput = screen.getByTestId('signup-confirm-password-input');
    const submitButton = screen.getByTestId('signup-submit-button');

    await act(async () => {
      store.dispatch(setEmailFormData(testEmailFormData));

      fireEvent.change(passwordInput, { target: { value: 'Qwertyu1' } });
      fireEvent.change(confirmPasswordInput, { target: { value: 'Qwertyu1' } });
      fireEvent.click(submitButton);
    });

    expect(signUpMock).toHaveBeenCalled();
  });
});
