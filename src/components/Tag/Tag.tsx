// TODO: Create default texts object and assign in function params or Tag.defaultProps instead of at each use case then re-enable control in story

import { ReactNode, useState, useEffect } from 'react';
import { TagVariant } from './Tag.types';

export interface TagProps {
  children: ReactNode;
  variant?: TagVariant;
  texts?: {
    featuredTag?: string;
  };
  className?: string;
}

const Tag = (props: TagProps): JSX.Element => {
  const [classes, setClasses] = useState('');
  const [featureTag, setFeatureTag] = useState<ReactNode>();

  useEffect(() => {
    let variantClass = '';
    switch (props.variant) {
      case 'accent':
        variantClass = 'bsds-tag-accent';
        break;
      case 'assertive':
        variantClass = 'bsds-tag-assertive';
        break;
      case 'featured':
        variantClass = 'bsds-tag-featured';
        break;
      case 'subtle':
        variantClass = 'bsds-tag-subtle';
        break;
      default:
        variantClass = 'bsds-tag';
        break;
    }
    setClasses(variantClass);
  }, [props.variant]);

  useEffect(() => {
    if (props.variant !== 'featured') {
      setFeatureTag(props.children);
    } else {
      setFeatureTag(props.texts?.featuredTag || 'Featured');
    }
  }, [props.variant, props.children, props.texts?.featuredTag]);

  return <b className={`${classes} ${props.className || ''}`}>{featureTag}</b>;
};

export default Tag;
