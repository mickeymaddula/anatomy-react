import { ButtonHTMLAttributes, ForwardedRef, forwardRef, useEffect, useState, ReactNode } from 'react';
import Icon from '../Icon';
import { ButtonIconSizes, ButtonSizes, ButtonVariants } from './';

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

type ActiveFilterButtonProps =
  | {
      children: ReactNode;
      variant?: never;
      size?: never;
      icon?: never;
      iconAlignment?: never;
      iconSize?: never;
      activeFilter?: boolean;
    }
  | {
      children?: ReactNode;
      variant?: ButtonVariants;
      size?: ButtonSizes;
      icon?: string;
      iconAlignment?: 'left' | 'right';
      iconSize?: ButtonIconSizes;
      activeFilter?: never;
    };

export type ButtonProps = BaseButtonProps & ActiveFilterButtonProps;

const Button = forwardRef(
  (
    {
      children,
      variant,
      size,
      icon,
      iconAlignment = 'left',
      iconSize,
      activeFilter,
      className,
      ...buttonAttrs
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ): JSX.Element => {
    let classes = '';
    switch (variant) {
      case 'assertive':
        classes = 'bsds-button-assertive';
        break;
      case 'subtle':
        classes = 'bsds-button-subtle';
        break;
      case 'text':
        classes = 'bsds-button-text';
        break;
      default:
        classes = 'bsds-button';
        break;
    }

    let buttonSizeClass = '';
    let buttonIconSizeClass = iconSize;
    switch (size) {
      case 'small':
        buttonSizeClass = 'bsds-button-small';
        buttonIconSizeClass = 'lg';
        break;

      default:
        break;
    }

    const [iconWithChildren, setIconWithChildren] = useState(children);
    useEffect(() => {
      if (icon && children) {
        setIconWithChildren(<span className="bsds-button-child">{children}</span>);
      } else {
        setIconWithChildren(children);
      }
    }, [icon, children]);

    if (icon && !children) {
      return (
        <button ref={ref} className={`bsds-button-icon ${classes} ${className || ''}`} {...buttonAttrs}>
          <Icon name={icon} size={iconSize} />
        </button>
      );
    }

    if (activeFilter) {
      return (
        <button ref={ref} className={`bsds-button-active-filter bsds-button-small ${className || ''}`} {...buttonAttrs}>
          {iconWithChildren}
          <Icon name="close" size="lg" className="bsds-icon-right" />
        </button>
      );
    }

    return (
      <button ref={ref} className={`${classes} ${className || ''} ${buttonSizeClass}`} {...buttonAttrs}>
        {!!(icon && iconAlignment === 'left') && (
          <Icon name={icon} size={buttonIconSizeClass} className="bsds-icon-left" />
        )}
        {iconWithChildren}
        {!!(icon && iconAlignment === 'right') && (
          <Icon name={icon} size={buttonIconSizeClass} className="bsds-icon-right" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
