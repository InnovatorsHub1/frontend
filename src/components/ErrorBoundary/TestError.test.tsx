import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides matchers like toBeInTheDocument
import TestError from './TestError';

describe('TestError Component', () => {
  test('renders the button', () => {
    render(<TestError />);
    const button = screen.getByRole('button', { name: /trigger error/i });
    expect(button).toBeInTheDocument();
  });
});
