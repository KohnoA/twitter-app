import { render, screen } from '@/utils/testHelpers';

import { SignUpPasswordForm } from './index';

describe('Test SignUpPasswordForm component', () => {
  it('Should be rendered', () => {
    render(<SignUpPasswordForm />);

    expect(screen.getByTestId('signup-password-form')).toBeInTheDocument();
  });
});
