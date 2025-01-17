import { ReactElement, useState, useEffect, cloneElement, useId, useRef } from 'react';
import HeadingElement, { HeadingLevel } from '../Heading';
import Link from '../Link';
import { TagProps } from '../Tag';
import { ImageProps } from '../Image';
import { CardVariant } from '../ContentCard';
export interface ProductCardProps {
  tag?: ReactElement<TagProps>;
  texts: {
    title: string;
    description: string;
  };
  linkTo: string;
  headingLevel?: Exclude<HeadingLevel, 'h1'>;
  assertiveTitle?: boolean;
  variant?: CardVariant;
  image?: ReactElement<ImageProps>;
  gradientBrand?: boolean;
  dropShadow?: boolean;
}

const ProductCard = (props: ProductCardProps): JSX.Element => {
  const { tag, texts, headingLevel, linkTo, variant, assertiveTitle = false, image, gradientBrand, dropShadow } = props;

  let cardStyles = {
    classes: '',
    titleLinkClasses: '',
    linkClasses: ''
  };

  const defaultStyle = {
    classes: 'bsds-card',
    titleLinkClasses: 'bsds-link-subtle',
    linkClasses: 'bsds-product-card-ns-title'
  };

  const borderStyle = {
    classes: 'bsds-card-border',
    titleLinkClasses: 'bsds-link-subtle',
    linkClasses: 'bsds-product-card-ns-title'
  };

  const [style, setStyle] = useState(cardStyles.classes);
  const [linkStyle, setLinkStyle] = useState(cardStyles.linkClasses);
  const [clonedImage, setClonedImage] = useState<ReactElement>();
  const [clonedTag, setClonedTag] = useState<ReactElement>();

  const productNameId = useId();
  const imageLink = useRef<HTMLAnchorElement>(null);

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

  useEffect(() => {
    setStyle(
      decorativeState
        ? `${'bsds-product-card'} ${cardStyles.classes} ${decorativeState}`
        : `${'bsds-product-card'} ${cardStyles.classes}`
    );
  }, [decorativeState, cardStyles.classes]);

  useEffect(() => {
    setLinkStyle(
      assertiveTitle
        ? `${cardStyles.linkClasses}${'-assertive'} ${'link-hitbox'}`
        : `${cardStyles.linkClasses} ${'link-hitbox'}`
    );
  }, [assertiveTitle, cardStyles.linkClasses]);

  useEffect(() => {
    if (tag) {
      setClonedTag(cloneElement(tag as ReactElement));
    }
  }, [tag]);

  useEffect(() => {
    if (image) {
      setClonedImage(
        cloneElement(image as ReactElement, {
          ratio: image.props.ratio ? image.props.ratio : '1:1',
          isDecorative: false,
          onClick: () => imageLink.current?.click()
        })
      );
    }
  }, [image, linkTo, variant]);

  const defaultProductCard = (
    <div className={style} data-testid="bsdsProductCard">
      {!!image && clonedImage}
      <div className="bsds-card-content">
        {!!tag && clonedTag}
        {headingLevel ? (
          <HeadingElement headingLevel={headingLevel} className="bsds-card-title" id={'productTitle' + productNameId}>
            <Link ref={imageLink} href={linkTo} className={`${cardStyles.titleLinkClasses} ${'link-hitbox'}`}>
              {texts.title}
            </Link>
          </HeadingElement>
        ) : (
          <Link ref={imageLink} href={linkTo} className={linkStyle} id={'productTitle' + productNameId}>
            {texts.title}
          </Link>
        )}
        <p className="bsds-card-description">{texts?.description}</p>
      </div>
    </div>
  );

  if (image?.props.ratio === '50:50') {
    return (
      <div data-testid="bsdsProductCard" className={`bsds-product-card-even-split ${style}`}>
        {!!image && clonedImage}
        <div className="bsds-card-content">
          {!!tag && clonedTag}
          {headingLevel ? (
            <HeadingElement headingLevel={headingLevel} className="bsds-card-title" id={'productTitle' + productNameId}>
              <Link ref={imageLink} href={linkTo} className={`${cardStyles.titleLinkClasses} ${'link-hitbox'}`}>
                {texts.title}
              </Link>
            </HeadingElement>
          ) : (
            <Link ref={imageLink} href={linkTo} className={linkStyle} id={'productTitle' + productNameId}>
              {texts.title}
            </Link>
          )}
          <p className="bsds-card-description">{texts?.description}</p>
        </div>
      </div>
    );
  }

  return defaultProductCard;
};

export default ProductCard;
