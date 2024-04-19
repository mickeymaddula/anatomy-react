import { ReactNode } from 'react';
import { StoplightColor, StoplightSize } from './Stoplight.types';

export interface StoplightProps {
  children: ReactNode;
  lightColor: StoplightColor;
  size?: StoplightSize;
  className?: string;
}

const Stoplight = ({ children, lightColor, size, className }: StoplightProps): JSX.Element => {
  let lightColorClasses = '';
  switch (lightColor) {
    case 'red':
      lightColorClasses = 'bsds-stoplight-red';
      break;
    case 'yellow':
      lightColorClasses = 'bsds-stoplight-yellow';
      break;
    case 'green':
      lightColorClasses = 'bsds-stoplight-green';
      break;
  }

  let sizeClasses = '';
  switch (size) {
    case 'assertive':
      sizeClasses = 'bsds-body-assertive';
      break;
    case 'subtle':
      sizeClasses = 'bsds-body-subtle';
      break;
  }

  return <p className={`${lightColorClasses} ${sizeClasses} ${className || ''}`}>{children}</p>;
};

export default Stoplight;
