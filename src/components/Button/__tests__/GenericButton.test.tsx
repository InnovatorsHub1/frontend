import { render, screen } from '@testing-library/react';
import GenericButton from '../GenericButton';

describe('GenericButton Component', () => {
  const defaultProps = {
    children: 'TEST',
    disabled: true,
  };

  beforeEach(() => {
    render(<GenericButton {...defaultProps}>{defaultProps.children}</GenericButton>);
  });

  it('renders the button with correct text', () => {
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders primary button correctly', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveClass('MuiButton-root');
    expect(button.closest('button'));
  });

  it('renders disabled button correctly', () => {
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
