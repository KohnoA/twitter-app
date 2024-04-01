import { memo, useMemo } from 'react';

import { FOOTER_LINKS, UNASSIGNED_LINK_VALUE } from '@/constants';

import * as S from './styled';

interface FooterProps {
  className?: string;
}

export const Footer = memo(({ className }: FooterProps) => {
  const currentYear = useMemo(() => new Date(Date.now()).getFullYear(), []);

  return (
    <footer className={className}>
      <S.FooterLinkList>
        {FOOTER_LINKS.map(({ title, link }) => (
          <li key={title}>
            <S.FooterLinkItem href={link ?? UNASSIGNED_LINK_VALUE}>{title}</S.FooterLinkItem>
          </li>
        ))}

        <li>
          <p>© {currentYear} Twitter, Inc.</p>
        </li>
      </S.FooterLinkList>
    </footer>
  );
});
