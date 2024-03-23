import { Link } from 'react-router-dom';

import { Button } from '@/components/UI';
import { AppRoutes, ICONS } from '@/constants';
import { LayoutWithFooter } from '@/layout';

import { NotFoundParagraph, NotFoundSection, NotFoundTitle } from './styled';

const { TwitterIcon } = ICONS;

export const NotFoundPage = () => (
  <LayoutWithFooter>
    <NotFoundSection>
      <NotFoundTitle $size="xl6">
        <TwitterIcon width={50} height={50} /> 404
      </NotFoundTitle>
      <NotFoundParagraph $size="xl3">Oops, page not found</NotFoundParagraph>
      <Button to={AppRoutes.ROOT} as={Link}>
        Go To Main
      </Button>
    </NotFoundSection>
  </LayoutWithFooter>
);
