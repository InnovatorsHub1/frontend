import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Link from '../Link';

describe('Link Component', () => {
  const defaultProps = {
    children: 'TEST',
    to: '/test',
  };

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Link {...defaultProps}>{defaultProps.children}</Link>
      </BrowserRouter>,
    );
  });

  it('navigates to the correct path when specified', () => {
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/test');
  });
});
