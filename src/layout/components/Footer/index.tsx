import { useMemo } from 'react';

import { FOOTER_LINKS, UNASSIGNED_LINK_VALUE } from '@/constants';

import { FooterLinkItem, FooterLinkList } from './styled';

export const Footer = () => {
  const currentYear = useMemo(() => new Date(Date.now()).getFullYear(), []);

  return (
    <footer>
      <FooterLinkList>
        {FOOTER_LINKS.map(({ title, link }) => (
          <li key={title}>
            <FooterLinkItem href={link ?? UNASSIGNED_LINK_VALUE}>{title}</FooterLinkItem>
          </li>
        ))}

        <li>
          <p>© {currentYear} Twitter, Inc.</p>
        </li>
      </FooterLinkList>
    </footer>
  );
};
