import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GenericButton from '../GenericButton';

describe('GenericButton Component', () => {
  // Basic text rendering test
  it('renders the button with correct text', () => {
    render(<GenericButton variant='text'>TEST</GenericButton>);
    const buttonElement = screen.getByText(/TEST/i);
    expect(buttonElement).toBeInTheDocument();
  });

  // Primary variant color test
  it('applies correct colors for primary variant', () => {
    render(<GenericButton variant='primary'>Primary Button</GenericButton>);
    const button = screen.getByText('Primary Button');
    expect(button).toHaveStyle({
      backgroundColor: 'black',
      color: 'skyblue',
    });
  });

  // Secondary variant color test
  it('applies correct colors for secondary variant', () => {
    render(<GenericButton variant='secondary'>Secondary Button</GenericButton>);
    const button = screen.getByText('Secondary Button');
    expect(button).toHaveStyle({
      backgroundColor: 'skyblue',
      color: 'black',
    });
  });

  // Disabled state test
  it('renders disabled button correctly', () => {
    render(<GenericButton disabled>Disabled Button</GenericButton>);
    const button = screen.getByText('Disabled Button');
    expect(button).toBeDisabled();
  });

  // Loading state test
  it('renders loading button correctly', () => {
    render(<GenericButton loading>Loading</GenericButton>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('Mui-disabled');
  });

  // Click event test
  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<GenericButton onClick={handleClick}>Click Me</GenericButton>);

    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Submit type color test
  it('applies correct colors for submit type', () => {
    render(<GenericButton type='submit'>Submit</GenericButton>);
    const button = screen.getByText('Submit');
    expect(button).toHaveStyle({
      backgroundColor: 'greenyellow',
      color: 'green',
    });
  });

  // Reset type color test
  it('applies correct colors for reset type', () => {
    render(<GenericButton type='reset'>Reset</GenericButton>);
    const button = screen.getByText('Reset');
    expect(button).toHaveStyle({
      backgroundColor: 'orange',
      color: 'pink',
    });
  });

  // Active state style test
  it('applies active styles when isActive is true', () => {
    render(
      <GenericButton isActive isActiveAcolor='red' isActiveBackgroundColor='pink'>
        Active Button
      </GenericButton>,
    );
    const button = screen.getByText('Active Button');
    expect(button).toHaveStyle({
      backgroundColor: 'pink',
      color: 'red',
    });
  });

  // Full width test
  it('renders full width button correctly', () => {
    render(<GenericButton fullWidth>Full Width</GenericButton>);
    const button = screen.getByText('Full Width');
    expect(button).toHaveStyle({ width: '100%' });
  });
});
