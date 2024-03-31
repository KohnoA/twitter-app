import { render, screen } from '@/utils/testHelpers';

import { SignUpEmailForm } from './index';

describe('Testing SignUpEmailForm', () => {
  it('Should be rendered', () => {
    render(<SignUpEmailForm />);

    expect(screen.getByTestId('signup-email-form')).toBeInTheDocument();
  });
});
