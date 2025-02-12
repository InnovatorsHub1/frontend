import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Link from '../Link';

describe('Link Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(
      <BrowserRouter>
        <div>
          <Link type='primary'>PRIMARY_TEST</Link>
          <Link type='secondary'>SECONDARY_TEST</Link>
          <Link type='default'>DEFAULT_TEST</Link>
          <Link type='primary' to='/redux'>
            PATH_TEST
          </Link>
          <Link type='primary' className='custom-class'>
            CLASS_TEST
          </Link>
          <Link type='primary'>
            <span data-testid='child'>Child Content</span>
          </Link>
          <Link>DEFAULT_PROPS_TEST</Link>
        </div>
      </BrowserRouter>,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it.each([
    ['PRIMARY_TEST', 'primary', 'text-primary dark:dark-text-primary'],
    ['SECONDARY_TEST', 'secondary', 'text-secondary dark:dark-text-secondary'],
    ['DEFAULT_TEST', 'default', 'text-default dark:dark-text-default'],
  ])('renders Link with type %s and correct classes', (text, _, expectedClass) => {
    const linkElement = screen.getByText(text);
    expect(linkElement).toHaveClass(expectedClass);
  });

  it('navigates to the correct path when specified', () => {
    const linkElement = screen.getByText('PATH_TEST');
    expect(linkElement).toHaveAttribute('href', '/redux');
  });

  it('combines custom className with type classes', () => {
    const linkElement = screen.getByText('CLASS_TEST');
    expect(linkElement).toHaveClass('text-primary', 'dark:dark-text-primary', 'custom-class');
  });

  it('renders children correctly', () => {
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('uses empty string as default path when no "to" prop is provided', () => {
    const linkElement = screen.getByText('DEFAULT_PROPS_TEST');
    expect(linkElement).toHaveAttribute('href', '/');
  });

  it('uses "default" as the default type when no type prop is provided', () => {
    const linkElement = screen.getByText('DEFAULT_PROPS_TEST');
    expect(linkElement).toHaveClass('text-default', 'dark:dark-text-default');
  });
});
