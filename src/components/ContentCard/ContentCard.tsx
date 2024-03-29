import { ReactElement, cloneElement, useState, useEffect, useId } from 'react';
import HeadingElement, { HeadingLevel } from '../Heading';
import { ImageProps } from '../Image';
import { TagProps } from '../Tag';
import Link from '../Link';
import Icon from '../Icon';

interface PlainCardProps {
  texts: {
    cardTitle: string;
    cardDescription: string;
  };
  variant?: string;
  headingLevel: Exclude<HeadingLevel, 'h1'>;
  tag?: ReactElement<TagProps>;
  image?: ReactElement<ImageProps>;
  icon?: boolean;
  iconName?: string;
}

type LinkedCardProps =
  | {
      linkTitle?: boolean;
      linkHref?: string;
      actionLink?: never;
      actionLinkText?: never;
    }
  | {
      linkTitle?: never;
      linkHref: string;
      actionLink: boolean;
      actionLinkText: string;
    };

type HoverProps =
  | {
      gradientBrand?: boolean;
      dropShadow?: never;
    }
  | {
      gradientBrand?: never;
      dropShadow?: boolean;
    };

type BaseProps = PlainCardProps & LinkedCardProps;
export type ContentCardProps = BaseProps & HoverProps;

const ContentCard = (props: ContentCardProps): JSX.Element => {
  const {
    texts,
    variant,
    headingLevel,
    tag,
    image,
    icon,
    iconName,
    linkTitle,
    linkHref,
    actionLink,
    actionLinkText,
    gradientBrand,
    dropShadow
  } = props;

  const cardTitleId = useId();

  let cardStyles = {
    classes: '',
    titleLinkClasses: '',
    linkClasses: ''
  };

  const defaultStyle = {
    classes: 'bsds-card',
    titleLinkClasses: 'bsds-link-subtle',
    linkClasses: ''
  };

  const borderStyle = {
    classes: 'bsds-card-border',
    titleLinkClasses: 'bsds-link-subtle',
    linkClasses: ''
  };

  switch (variant) {
    case 'border':
      cardStyles = { ...borderStyle };
      break;

    default:
      cardStyles = { ...defaultStyle };
      break;
  }

  let decorativeState = '';
  if (gradientBrand) {
    decorativeState = 'bsds-card-gradient';
    cardStyles = { ...borderStyle };
  } else if (dropShadow) {
    decorativeState = 'bsds-card-shadow';
    cardStyles = { ...borderStyle };
  }

  const [title, setTitle] = useState<ReactElement>();
  const [style, setStyle] = useState(cardStyles.classes);
  const [clonedImage, setClonedImage] = useState<ReactElement>();
  const [clonedTag, setClonedTag] = useState<ReactElement>();

  useEffect(() => {
    if (linkTitle) {
      setTitle(
        <Link href={linkHref} className={`${cardStyles.titleLinkClasses} ${'link-hitbox'}`}>
          {texts.cardTitle}
        </Link>
      );
    } else {
      setTitle(<>{texts.cardTitle}</>);
    }
  }, [texts.cardTitle, linkHref, cardStyles.titleLinkClasses, linkTitle]);

  useEffect(() => {
    setStyle(decorativeState && actionLink ? `${cardStyles.classes} ${decorativeState}` : cardStyles.classes);
  }, [decorativeState, actionLink, cardStyles.classes]);

  useEffect(() => {
    if (image) {
      setClonedImage(cloneElement(image as ReactElement));
    }
  }, [image]);

  useEffect(() => {
    if (tag) {
      setClonedTag(cloneElement(tag as ReactElement));
    }
  }, [tag]);

  const cardContent = (
    <>
      {clonedTag}
      <HeadingElement headingLevel={headingLevel} className="bsds-card-title" id={'cardTitle' + cardTitleId}>
        {title}
      </HeadingElement>
      <p className="bsds-card-description">{texts?.cardDescription}</p>
      {!!actionLink && (
        <Link href={linkHref} className={`${cardStyles.linkClasses}`}>
          {actionLinkText}
        </Link>
      )}
    </>
  );

  const cardContentWrapper = (
    <>
      {!!icon && <Icon name={`${iconName}`} className="bsds-icon-8x" />}
      <div className="bsds-card-content">{cardContent}</div>
    </>
  );

  if (clonedImage) {
    return (
      <div className={`${style} bsds-card-with-image`} data-testid="bsdsCard">
        {clonedImage}
        {cardContentWrapper}
      </div>
    );
  } else {
    return (
      <div className={style} data-testid="bsdsCard">
        {cardContentWrapper}
      </div>
    );
  }
};

export default ContentCard;
