import { render, screen } from '@testing-library/react';
import GenericButton from '../GenericButton';

describe('GenericButton Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(
      <>
        <GenericButton>TEST</GenericButton>
        <GenericButton>Button</GenericButton>
        <GenericButton disabled>Disabled Button</GenericButton>
      </>,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  it('renders the button with correct text', () => {
    const buttonElement = screen.getByRole('button', { name: /TEST/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders primary button correctly', () => {
    const button = screen.getByRole('button', { name: 'Button' });
    expect(button).toHaveClass('MuiButton-root');
    expect(button.closest('button'));
  });

  it('renders disabled button correctly', () => {
    const button = screen.getByRole('button', { name: 'Disabled Button' });
    expect(button).toBeDisabled();
  });
});
