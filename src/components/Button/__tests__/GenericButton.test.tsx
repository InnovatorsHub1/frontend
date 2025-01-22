import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GenericButton from '../GenericButton';

describe('GenericButton Component', () => {
  it('renders the button with correct text', () => {
    render(<GenericButton variant="text">TESTTTTTTT</GenericButton>);
    const buttonElement = screen.getByText(/TESTTTTTTT/i);
    expect(buttonElement).toBeInTheDocument();
  });
});