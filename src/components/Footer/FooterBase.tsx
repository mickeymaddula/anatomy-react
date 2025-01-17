import { ReactElement, useEffect, useState } from 'react';
import Link from '../Link';
import { RequireOnlyOne, NavItem } from '../../types';
import IconFacebook from '../Icon/icons/IconFacebook';
import IconTwitter from '../Icon/icons/IconTwitter';
import IconLinkedin from '../Icon/icons/IconLinkedin';
import IconYoutube from '../Icon/icons/IconYoutube';

interface LegalLinksBase extends NavItem {
  children?: LegalLinkItem[];
}
export type SocialMediaItem = {
  name: string;
  link: string;
  icon: string;
};

export type LegalLinkItem = RequireOnlyOne<LegalLinksBase, 'to' | 'href'>;
export interface FooterBaseProps {
  legalLinkItems?: LegalLinkItem[];
  legalLinkAriaLabel?: string;
  corporateLink?: boolean;
  customizeCookiesLink?: string;
  complianceCode?: string;
  socialMedia?: SocialMediaItem[];

  texts?: {
    corporateLinkText?: string;
    tagline?: string;
    customCookiesLinkText?: string;
    complianceCodeText?: string;
    copyrightText?: string;
  };

  logo: {
    src: string | ReactElement<SVGElement>;
    alt?: string;
  };
}

const FooterBase = ({
  legalLinkItems,
  legalLinkAriaLabel,
  corporateLink,
  texts,
  logo,
  customizeCookiesLink,
  complianceCode,
  socialMedia
}: FooterBaseProps) => {
  const socialIcons = {
    facebook: <IconFacebook className="bsds-footer-social-media-icon" />,
    twitter: <IconTwitter className="bsds-footer-social-media-icon" />,
    linkedin: <IconLinkedin className="bsds-footer-social-media-icon" />,
    youtube: <IconYoutube className="bsds-footer-social-media-icon" />
  };
  const [footerLogo, setFooterLogo] = useState<ReactElement>();

  useEffect(() => {
    if (typeof logo.src === 'string') {
      setFooterLogo(<img src={logo.src} alt={logo.alt} className="bsds-footer-logo" />);
    } else {
      setFooterLogo(<div className="bsds-footer-logo">{logo.src}</div>);
    }
  }, [logo]);

  return (
    <div className="bsds-footer-base">
      {!!legalLinkItems && (
        <nav
          className="bsds-nav-footer-legal"
          aria-label={legalLinkAriaLabel ?? 'Footer utility'}
          data-testid="bsdsFooterUtility"
        >
          <ul className="bsds-nav">
            {legalLinkItems?.map((legalLinkItem) => (
              <li key={'legalLinkItem' + legalLinkItem.text} className="bsds-nav-item">
                <Link to={legalLinkItem.to} href={legalLinkItem.href} className="bsds-nav-link">
                  {legalLinkItem.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <div className="bsds-footer-base-container">
        {footerLogo}
        {!!corporateLink && (
          <Link className="bsds-footer-link-corp" href="https://www.bostonscientific.com/">
            {texts?.corporateLinkText ?? 'Boston Scientific home site'}
          </Link>
        )}
        {!!texts?.tagline && <p className="bsds-footer-tagline">{texts?.tagline}</p>}

        {!!socialMedia && (
          <ul className="bsds-footer-social-media" data-testid="bsdsFooterSocial">
            {socialMedia.map(({ name, link, icon }) => (
              <li key={name} className="bsds-footer-social-media-item">
                <Link href={link} aria-label={name} variant="subtle">
                  {socialIcons[icon as keyof typeof socialIcons]}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {!!customizeCookiesLink && (
          <Link className="bsds-mt-2x" href={customizeCookiesLink}>
            {texts?.customCookiesLinkText ?? 'Customize cookies'}
          </Link>
        )}

        {!!complianceCode && (
          <small className="bsds-footer-text-small">
            {texts?.complianceCodeText ?? 'Approval #'} {complianceCode}
          </small>
        )}

        <small className="bsds-footer-text-small">
          &copy; {new Date().getFullYear()}{' '}
          {texts?.copyrightText ?? 'Boston Scientific Corporation or its affiliates. All rights reserved.'}
        </small>
      </div>
    </div>
  );
};

export default FooterBase;
