import FooterNav, { NavItemsFooter } from './FooterNav';
import FooterBase, { FooterBaseProps } from './FooterBase';
import { ReactElement } from 'react';
export interface FooterProps extends FooterBaseProps {
  navItems?: NavItemsFooter[];
  navAriaLabel?: string;
  className?: string;
  children?: ReactElement;
}

const Footer = ({
  navItems,
  navAriaLabel,
  legalLinkItems,
  corporateLink,
  texts,
  logo,
  customizeCookiesLink,
  complianceCode,
  socialMedia,
  className,
  children
}: FooterProps) => {
  return (
    <footer className={`bsds-footer ${className || ''}`}>
      {!!navItems && <FooterNav navItems={navItems} aria-label={navAriaLabel} />}
      <FooterBase
        legalLinkItems={legalLinkItems}
        corporateLink={corporateLink}
        texts={texts}
        logo={logo}
        customizeCookiesLink={customizeCookiesLink}
        complianceCode={complianceCode}
        socialMedia={socialMedia}
      />
      {children}
    </footer>
  );
};

export default Footer;
