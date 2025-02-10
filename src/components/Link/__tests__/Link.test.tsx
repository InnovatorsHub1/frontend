import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Link from '../Link';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui: React.ReactNode) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Link Component', () => {
  // Type variants tests
  it.each([
    ['primary', 'text-primary dark:dark-text-primary'],
    ['secondary', 'text-secondary dark:dark-text-secondary'],
    ['default', 'text-default dark:dark-text-default'],
  ])('renders Link with type %s and correct classes', (type, expectedClass) => {
    renderWithRouter(<Link type={type as 'primary' | 'secondary' | 'default'}>TEST</Link>);
    const linkElement = screen.getByText(/TEST/i);
    expect(linkElement).toHaveClass(expectedClass);
  });

  // Navigation test
  it('navigates to the correct path when specified', () => {
    const TEST_PATH = '/redux';
    renderWithRouter(<Link type='primary' to={TEST_PATH}>TEST</Link>);
    const linkElement = screen.getByText(/TEST/i);
    expect(linkElement).toHaveAttribute('href', TEST_PATH);
  });

  // Custom className test
  it('combines custom className with type classes', () => {
    const customClass = 'custom-class';
    renderWithRouter(
      <Link type='primary' className={customClass}>
        TEST
      </Link>
    );
    const linkElement = screen.getByText(/TEST/i);
    expect(linkElement).toHaveClass('text-primary', 'dark:dark-text-primary', customClass);
  });

  // Children rendering test
  it('renders children correctly', () => {
    renderWithRouter(
      <Link type='primary'>
        <span data-testid="child">Child Content</span>
      </Link>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  // Default to prop test
  it('uses root path "/" when no "to" prop is provided', () => {
    renderWithRouter(<Link type='primary'>TEST</Link>);
    const linkElement = screen.getByText(/TEST/i);
    expect(linkElement).toHaveAttribute('href', '/');
  });
});