import { testUser } from '@/__mocks__';
import { AppRoutes, SignUpSteps } from '@/constants';
import { store } from '@/store';
import { act, fireEvent, render, screen } from '@/utils/testHelpers';

import { SignUpEmailForm } from './index';

describe('Testing SignUpEmailForm', () => {
  beforeEach(() => render(<SignUpEmailForm />));

  afterAll(() => jest.clearAllMocks());

  it('Should be rendered', () => {
    expect(screen.getByTestId('signup-email-form')).toBeInTheDocument();
  });

  it('Must contain a link to the signup page', () => {
    const useEmailLink = screen.getByText('Use email');

    expect(useEmailLink).toHaveAttribute('href', AppRoutes.SIGN_UP);
  });

  it('Must proceed to the next registration step', async () => {
    const nameInput = screen.getByTestId('signup-name-input');
    const emailInput = screen.getByTestId('signup-email-input');
    const phoneInput = screen.getByTestId('signup-phone-input');
    const monthSelect = screen.getByTestId('signup-month-select');
    const daySelect = screen.getByTestId('signup-day-select');
    const yearSelect = screen.getByTestId('signup-year-select');
    const nextButton = screen.getByTestId('signup-next-button');

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: testUser.name } });
      fireEvent.change(emailInput, { target: { value: testUser.email } });
      fireEvent.change(phoneInput, { target: { value: testUser.phone } });
      fireEvent.change(monthSelect, { target: { value: 'May' } });
      fireEvent.change(daySelect, { target: { value: '1' } });
      fireEvent.change(yearSelect, { target: { value: '2000' } });
      fireEvent.click(nextButton);
    });

    const state = store.getState();
    const { step, emailFormData } = state.signUp;

    expect(step).toBe(SignUpSteps.PASSWORD_STEP);
    expect(emailFormData).not.toBeUndefined();
    expect(emailFormData?.name).toBe(testUser.name);
  });
});
