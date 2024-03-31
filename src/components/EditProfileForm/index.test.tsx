import { render, screen } from '@/utils/testHelpers';

import { EditProfileForm } from './index';

describe('Testing EditProfileForm component', () => {
  it('Should be rendered', () => {
    render(<EditProfileForm onCancel={jest.fn()} onChangePassword={jest.fn()} />);

    expect(screen.getByTestId('edit-profile-form')).toBeInTheDocument();
  });
});
