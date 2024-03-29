import { render, screen } from '@testing-library/react';
import Callout from './Callout';

describe('Callout', () => {
  it('Renders centered when prop is present', () => {
    render(<Callout isCentered>Centered callout!</Callout>);

    expect(screen.getByText('Centered callout!')).toBeInTheDocument();
    expect(screen.getByText('Centered callout!')).toHaveClass('bsds-callout-centered');
  });
});
