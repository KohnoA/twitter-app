import { Link } from 'react-router-dom';

import { Button, MyLink, Paragraph } from '@/components/UI';
import { AppRoutes, ICONS, UNASSIGNED_LINK_VALUE } from '@/constants';
import { LayoutWithFooter } from '@/layout';

import {
  ButtonsWrapper,
  MainTitle,
  PolicyParagraph,
  SignUpForm,
  SignUpMain,
  SubTitle,
  TwitterBackground,
  TwitterIconWrapper,
} from './styled';

const { TwitterIcon, GoogleIcon } = ICONS;

export const SignUpPage = () => (
  <LayoutWithFooter>
    <SignUpMain>
      <TwitterBackground />

      <SignUpForm>
        <TwitterIconWrapper>
          <TwitterIcon width={50} height={50} />
        </TwitterIconWrapper>

        <MainTitle>Happining now</MainTitle>
        <SubTitle as="h3">Join ot twitter now</SubTitle>

        <ButtonsWrapper>
          <Button $view="primary">
            <GoogleIcon width={26} height={26} /> Sign up with Google
          </Button>
          <Button to={AppRoutes.SIGN_UP_EMAIL} as={Link} $view="primary">
            Sign up with email
          </Button>
        </ButtonsWrapper>

        <PolicyParagraph>
          By singing up you agree to the{' '}
          <MyLink to={UNASSIGNED_LINK_VALUE}>Terms of Service</MyLink> and{' '}
          <MyLink to={UNASSIGNED_LINK_VALUE}>Privacy Policy</MyLink>, including{' '}
          <MyLink to={UNASSIGNED_LINK_VALUE}>Cookie Use</MyLink>.
        </PolicyParagraph>

        <Paragraph>
          Already have an account? <Link to={AppRoutes.LOGIN}>Log in</Link>
        </Paragraph>
      </SignUpForm>
    </SignUpMain>
  </LayoutWithFooter>
);
