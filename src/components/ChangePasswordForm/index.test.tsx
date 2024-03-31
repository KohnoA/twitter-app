import { render, screen } from '@/utils/testHelpers';

import { ChangePasswordForm } from './index';

describe('Testing ChangePasswordForm component', () => {
  it('Should be rendered', () => {
    render(<ChangePasswordForm onCancel={jest.fn()} />);

    expect(screen.getByTestId('change-password-form')).toBeInTheDocument();
  });
});
