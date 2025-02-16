import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GenericButton from '../GenericButton';

describe('GenericButton Component', () => {
  let handleClick: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    handleClick = jest.fn();
    render(
      <>
        <GenericButton variant='text'>TEST</GenericButton>
        <GenericButton variant='primary'>Primary Button</GenericButton>
        <GenericButton disabled>Disabled Button</GenericButton>
        <GenericButton loading>Loading</GenericButton>
        <GenericButton onClick={handleClick}>Click Me</GenericButton>
      </>,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  it('renders the button with correct text', () => {
    const buttonElement = screen.getByText(/TEST/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders primary button correctly', () => {
    const button = screen.getByText('Primary Button');
    expect(button).toHaveClass('text-primary');
    expect(button).toHaveClass('bg-primary');
  });

  it('renders disabled button correctly', () => {
    const button = screen.getByText('Disabled Button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('Mui-disabled');
  });

  it('renders loading button correctly', () => {
    const loadingButton = screen.getByText('Loading').closest('button');
    const progressSpinner = screen.getByRole('progressbar');

    expect(loadingButton).toBeInTheDocument();
    expect(progressSpinner).toBeInTheDocument();
    expect(loadingButton).toContainElement(progressSpinner);
  });
});
