import { ReactElement, useEffect, useState } from 'react';
import DropdownMenu from '../DropdownMenu';
import Link from '../Link';
import { NavItemUtility } from '../NavPrimary';

export interface NavUtilityProps {
  utilityItems: NavItemUtility[];
  ariaLabel?: string;
  logoSecondary?: {
    src: string | ReactElement<SVGElement>;
    alt: string;
  };
}

const NavUtility = ({ utilityItems, ariaLabel = 'Utility', logoSecondary }: NavUtilityProps): JSX.Element => {
  const [secondaryLogo, setSecondaryLogo] = useState<ReactElement>();

  useEffect(() => {
    if (typeof logoSecondary?.src === 'string') {
      setSecondaryLogo(<img className="bsds-nav-logo-secondary" src={logoSecondary.src} alt={logoSecondary.alt} />);
    } else {
      setSecondaryLogo(<div className="bsds-nav-logo-secondary">{logoSecondary?.src}</div>);
    }
  }, [logoSecondary?.src, logoSecondary?.alt]);

  return (
    <nav className="bsds-nav-utility" aria-label={ariaLabel}>
      <div className="bsds-nav-utility-container">
        {secondaryLogo}
        <ul className="bsds-nav">
          {utilityItems.map((utilityItem) => (
            <li key={'utilityItem' + utilityItem.text} className="bsds-nav-item">
              {utilityItem.children ? (
                <DropdownMenu triggerText={utilityItem.text} className="bsds-nav-link" menuPosition="bottom-end">
                  {utilityItem.children.map((child) => (
                    <Link key={child.text + (child.to || child.href)} href={child.href} to={child.to}>
                      {child.text}
                    </Link>
                  ))}
                </DropdownMenu>
              ) : (
                <Link to={utilityItem.to} href={utilityItem.href} className="bsds-nav-link">
                  {utilityItem.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavUtility;
