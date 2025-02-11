import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Link from '../Link';
import { BrowserRouter } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';

describe('Link Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Link type='primary'>TEST</Link>
      </BrowserRouter>,
    );
  });

  it.each([
    ['primary', 'text-primary dark:dark-text-primary'],
    ['secondary', 'text-secondary dark:dark-text-secondary'],
    ['default', 'text-default dark:dark-text-default'],
  ])('renders Link with type %s and correct classes', (type, expectedClass) => {
    render(<Link type={type as 'primary' | 'secondary' | 'default'}>TEST</Link>);
    const linkElement = screen.getByText(/TEST/i);
    expect(linkElement).toHaveClass(expectedClass);
  });
});

it('navigates to the correct path when specified', () => {
  const TEST_PATH = '/redux';
  render(
    <Link type='primary' to={TEST_PATH}>
      TEST
    </Link>,
  );
  const linkElement = screen.getByText(/TEST/i);
  expect(linkElement).toHaveAttribute('href', TEST_PATH);
});

it('combines custom className with type classes', () => {
  const customClass = 'custom-class';
  render(
    <Link type='primary' className={customClass}>
      TEST
    </Link>,
  );
  const linkElement = screen.getByText(/TEST/i);
  expect(linkElement).toHaveClass('text-primary', 'dark:dark-text-primary', customClass);
});

it('renders children correctly', () => {
  render(
    <Link type='primary'>
      <span data-testid='child'>Child Content</span>
    </Link>,
  );
  expect(screen.getByTestId('child')).toBeInTheDocument();
});

it('uses root path "/" when no "to" prop is provided and navigates correctly', async () => {
  // const user = userEvent.setup();
  render(<Link type='primary'>TEST</Link>);
  const linkElement = screen.getByText(/TEST/i);
  expect(linkElement).toHaveAttribute('href', '/#test');
  // await user.click(linkElement);
  fireEvent.click(linkElement);
  expect(window.location.pathname).toBe('/#test');
});
