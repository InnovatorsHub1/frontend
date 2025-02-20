import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GenericButton from '../GenericButton';

describe('GenericButton Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(
      <>
        <GenericButton>TEST</GenericButton>
        <GenericButton variant='primary'>Primary Button</GenericButton>
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
    const button = screen.getByRole('button', { name: 'Primary Button' });
    expect(button).toHaveClass('MuiButton-root');
    expect(button.closest('button')).toHaveStyle('text-transform: none');
    expect(button).toHaveClass('MuiButton-contained');
  });

  it('renders disabled button correctly', () => {
    const button = screen.getByRole('button', { name: 'Disabled Button' });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('Mui-disabled');
    expect(button).toHaveStyle({
      backgroundColor: 'rgba(72, 143, 102, 0.5)',
    });
  });
});
