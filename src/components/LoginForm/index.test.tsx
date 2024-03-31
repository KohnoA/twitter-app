import { render, screen } from '@/utils/testHelpers';

import { LoginForm } from './index';

describe('Testing LoginForm component', () => {
  it('Should be rendered', () => {
    render(<LoginForm />);

    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });
});
