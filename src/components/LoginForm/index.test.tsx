import { signInMock } from '@/__mocks__';
import { AppRoutes } from '@/constants';
import { act, fireEvent, render, screen } from '@/utils/testHelpers';

import { LoginForm } from './index';

describe('Testing LoginForm component', () => {
  beforeEach(() => render(<LoginForm />));

  it('Should be rendered', () => {
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });

  it('Must contain a link to the registration page', () => {
    const signUpLink = screen.getByTestId('signup-link');

    expect(signUpLink).toHaveAttribute('href', AppRoutes.SIGN_UP);
  });

  it('Must log in to your account if the data is valid', async () => {
    const emailInput = screen.getByTestId('login-email-input');
    const passwordInput = screen.getByTestId('login-password-input');
    const submitButton = screen.getByTestId('login-submit-button');

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: 'test123@gmail.com' } });
      fireEvent.change(passwordInput, { target: { value: 'Qwertyu1' } });
      fireEvent.click(submitButton);
    });

    expect(signInMock).toHaveBeenCalled();
  });
});
