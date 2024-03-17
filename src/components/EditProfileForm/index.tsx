import { Button } from '../UI';

import { ButtonsWrapper, EditProfileFormContainer } from './styled';

export const EditProfileForm = () => (
  <EditProfileFormContainer>
    <p>Photo</p>
    <p>name</p>
    <p>number</p>
    <p>birthday</p>
    <p>description</p>

    <ButtonsWrapper>
      <Button>Cancel</Button>
      <Button>Accept</Button>
    </ButtonsWrapper>
  </EditProfileFormContainer>
);
