import { ReactNode, useState, useEffect } from 'react';

export interface CalloutProps {
  children: ReactNode;
  className?: string;
  isCentered?: boolean;
}

const Callout = (props: CalloutProps): JSX.Element => {
  const [classes, setClasses] = useState('');

  useEffect(() => {
    let calloutClass = '';

    if (props.isCentered) {
      calloutClass ? (calloutClass += ' bsds-callout-centered') : (calloutClass += ' bsds-callout-centered');
    }

    setClasses(calloutClass);
  }, [props.isCentered]);

  return <p className={`bsds-callout${classes} ${props.className || ''}`}>{props.children}</p>;
};

export default Callout;
