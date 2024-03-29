import { ReactNode, useState, useEffect } from 'react';

export interface CalloutProps {
  children: ReactNode;
  className?: string;
  isCentered?: boolean;
  isinverse?: boolean;
}

const Callout = (props: CalloutProps): JSX.Element => {
  const [classes, setClasses] = useState('');

  useEffect(() => {
    let calloutClass = '';

    if (props.isCentered) {
      calloutClass ? (calloutClass += ' bsds-callout-centered') : (calloutClass += ' bsds-callout-centered');
    }

    if (props.isinverse) {
      // TODO: replace isinverse with theming
      calloutClass ? (calloutClass += ' bsds-callout-inverse') : (calloutClass += ' bsds-callout-inverse');
    }

    setClasses(calloutClass);
  }, [props.isCentered, props.isinverse]);

  return <p className={`bsds-callout${classes} ${props.className || ''}`}>{props.children}</p>;
};

export default Callout;
