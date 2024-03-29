import { render, screen } from '@testing-library/react';
import Tag from './Tag';

describe('Tag', () => {
  it('Renders default variant when no variant prop passed', () => {
    render(<Tag>Sample Tag!</Tag>);
    expect(screen.getByText('Sample Tag!')).toBeInTheDocument();
    expect(screen.getByText('Sample Tag!')).toHaveClass('bsds-tag');
  });

  it('Renders inverse variant', () => {
    render(<Tag isinverse>Variant Tag!</Tag>);

    expect(screen.getByText('Variant Tag!')).toBeInTheDocument();
    expect(screen.getByText('Variant Tag!')).toHaveClass('bsds-tag-inverse');
  });

  it('Renders accent variation', () => {
    render(<Tag variant="accent">Sample Tag!</Tag>);
    expect(screen.getByText('Sample Tag!')).toBeInTheDocument();
    expect(screen.getByText('Sample Tag!')).toHaveClass('bsds-tag-accent');
  });

  it('Renders accent-inverse variation', () => {
    render(
      <Tag variant="accent" isinverse>
        Sample Tag!
      </Tag>
    );

    expect(screen.getByText('Sample Tag!')).toBeInTheDocument();
    expect(screen.getByText('Sample Tag!')).toHaveClass('bsds-tag-accent-inverse');
  });

  it('Renders assertive variation', () => {
    render(<Tag variant="assertive">Variant Tag!</Tag>);

    expect(screen.getByText('Variant Tag!')).toBeInTheDocument();
    expect(screen.getByText('Variant Tag!')).toHaveClass('bsds-tag-assertive');
  });

  it('Renders assertive-inverse variation', () => {
    render(
      <Tag variant="assertive" isinverse>
        Variant Tag!
      </Tag>
    );

    expect(screen.getByText('Variant Tag!')).toBeInTheDocument();
    expect(screen.getByText('Variant Tag!')).toHaveClass('bsds-tag-assertive-inverse');
  });

  it("Renders featured variation with 'featured' as tag text", () => {
    render(<Tag variant="featured">Variant Tag!</Tag>);

    expect(screen.getByText('Featured')).toBeInTheDocument();
    expect(screen.getByText('Featured')).toHaveClass('bsds-tag-featured');
  });

  it("Renders featured-inverse variation with 'featured' as tag text", () => {
    render(
      <Tag variant="featured" isinverse>
        Variant Tag!
      </Tag>
    );

    expect(screen.getByText('Featured')).toBeInTheDocument();
    expect(screen.getByText('Featured')).toHaveClass('bsds-tag-featured-inverse');
  });
});
