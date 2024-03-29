import { render, screen } from '@testing-library/react';
import Callout from './Callout';

describe('Callout', () => {
  it('Renders inverse when prop is present', () => {
    render(<Callout isinverse>inverse callout!</Callout>);

    expect(screen.getByText('inverse callout!')).toBeInTheDocument();
    expect(screen.getByText('inverse callout!')).toHaveClass('bsds-callout-inverse');
  });

  it('Renders centered when prop is present', () => {
    render(<Callout isCentered>Centered callout!</Callout>);

    expect(screen.getByText('Centered callout!')).toBeInTheDocument();
    expect(screen.getByText('Centered callout!')).toHaveClass('bsds-callout-centered');
  });
});
