import { render, screen } from '@testing-library/react';
import Stoplight from './Stoplight';

describe('Stoplight', () => {
  it('Renders alert variation', () => {
    render(<Stoplight lightColor="red">Sample Stoplight!</Stoplight>);
    expect(screen.getByText('Sample Stoplight!')).toBeInTheDocument();
    expect(screen.getByText('Sample Stoplight!')).toHaveClass('bsds-stoplight-red');
  });

  it('Renders warning variation', () => {
    render(<Stoplight lightColor="yellow">Sample Stoplight!</Stoplight>);
    expect(screen.getByText('Sample Stoplight!')).toBeInTheDocument();
    expect(screen.getByText('Sample Stoplight!')).toHaveClass('bsds-stoplight-yellow');
  });

  it('Renders success variation', () => {
    render(<Stoplight lightColor="green">Sample Stoplight!</Stoplight>);

    expect(screen.getByText('Sample Stoplight!')).toBeInTheDocument();
    expect(screen.getByText('Sample Stoplight!')).toHaveClass('bsds-stoplight-green');
  });

  it('Renders assertive size when prop is present', () => {
    render(
      <Stoplight lightColor="green" size="assertive">
        Variant Stoplight!
      </Stoplight>
    );

    expect(screen.getByText('Variant Stoplight!')).toBeInTheDocument();
    expect(screen.getByText('Variant Stoplight!')).toHaveClass('bsds-body-assertive');
  });

  it('Renders subtle size when prop is present', () => {
    render(
      <Stoplight lightColor="green" size="subtle">
        Variant Stoplight!
      </Stoplight>
    );

    expect(screen.getByText('Variant Stoplight!')).toBeInTheDocument();
    expect(screen.getByText('Variant Stoplight!')).toHaveClass('bsds-body-subtle');
  });
});
